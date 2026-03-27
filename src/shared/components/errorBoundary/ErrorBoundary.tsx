import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
    children: ReactNode
    fallback?: ReactNode
}

type ErrorBoundaryState = {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? (
                <div className="flex flex-col items-center justify-center min-h-[200px] text-white">
                    <h2 className="text-xl font-semibold mb-2">Algo deu errado</h2>
                    <p className="text-slate-400">Ocorreu um erro ao carregar esta seção.</p>
                    <button
                        className="mt-4 px-4 py-2 bg-sky-500 rounded hover:bg-sky-600 transition"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Tentar novamente
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
