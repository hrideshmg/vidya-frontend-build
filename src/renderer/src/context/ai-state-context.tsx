import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";

/**
 * Enum for all possible AI states
 * @description Defines all possible states that the AI can be in
 */
export const enum AiStateEnum {
  /**
   * Default state when AI is not performing any action
   * - Can be triggered to speak proactively
   * - Ready to receive user input
   */
  IDLE = "idle",

  /**
   * AI is processing user input and generating response
   * - Can be interrupted by user
   */
  THINKING_SPEAKING = "thinking-speaking",

  /**
   * AI was interrupted during response
   * - Triggered by sending text / speech detected / clicking interrupt button / create new chat history / switch character
   * - Auto returns to IDLE after 2s
   */
  INTERRUPTED = "interrupted",

  /**
   * Loading state for model/character changes
   * - Shows during initial load / character switching
   */
  LOADING = "loading",

  /**
   * AI is actively listening to user speech
   * - Microphone is active
   */
  LISTENING = "listening",

  /**
   * Temporary state indicating user activity
   * - Set when user is typing
   * - Auto returns to IDLE after 2s
   */
  WAITING = "waiting",
}

export type AiState = `${AiStateEnum}`;

/**
 * Type definition for the AI state context
 */
interface AiStateContextType {
  aiState: AiState;
  setAiState: (state: AiState) => void;
  isIdle: boolean;
  isThinkingSpeaking: boolean;
  isInterrupted: boolean;
  isLoading: boolean;
  isListening: boolean;
  isWaiting: boolean;
  resetState: () => void;
}

/**
 * Initial context value
 */
const initialState: AiState = AiStateEnum.LOADING;

/**
 * Create the AI state context
 */
export const AiStateContext = createContext<AiStateContextType | null>(null);

/**
 * AI State Provider Component
 */
export function AiStateProvider({ children }: { children: ReactNode }) {
  const [aiState, setAiStateInternal] = useState<AiState>(initialState);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setAiState = useCallback((newState: AiState) => {
    if (newState === AiStateEnum.INTERRUPTED || newState === AiStateEnum.WAITING) {
      setAiStateInternal(newState);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setAiStateInternal(AiStateEnum.IDLE);
        timerRef.current = null;
      }, 2000);
    } else {
      setAiStateInternal(newState);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  }, []);

  // Memoized state checks
  const stateChecks = useMemo(
    () => ({
      isIdle: aiState === AiStateEnum.IDLE,
      isThinkingSpeaking: aiState === AiStateEnum.THINKING_SPEAKING,
      isInterrupted: aiState === AiStateEnum.INTERRUPTED,
      isLoading: aiState === AiStateEnum.LOADING,
      isListening: aiState === AiStateEnum.LISTENING,
      isWaiting: aiState === AiStateEnum.WAITING,
    }),
    [aiState]
  );

  // Reset state handler
  const resetState = useCallback(() => {
    setAiState(AiStateEnum.IDLE);
  }, [setAiState]);

  // 组件卸载时清理计时器
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Memoized context value
  const contextValue = useMemo(
    () => ({
      aiState,
      setAiState,
      ...stateChecks,
      resetState,
    }),
    [aiState, setAiState, stateChecks, resetState]
  );

  return (
    <AiStateContext.Provider value={contextValue}>
      {children}
    </AiStateContext.Provider>
  );
}

/**
 * Custom hook to use the AI state context
 * @throws {Error} If used outside of AiStateProvider
 */
export function useAiState() {
  const context = useContext(AiStateContext);

  if (!context) {
    throw new Error("useAiState must be used within a AiStateProvider");
  }

  return context;
}
