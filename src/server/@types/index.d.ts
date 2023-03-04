import '../database/schemes'

declare global {
	interface PlayerMp {
		sendToast: ({type, message}:{type: "success" | "warning" | "info" | "error", message: string}) => void;
		username: (username: string) => void;
	}
}

export {};
