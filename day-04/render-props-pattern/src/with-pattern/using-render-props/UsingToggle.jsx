import Toggle from "./Toggle";

export default function UsingToggle() {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Toggle — render prop</h3>

            <Toggle
                render={({ isOpen, toggle }) => (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggle}
                            className="px-3 py-1 border rounded"
                        >
                            {isOpen ? "Close" : "Open"}
                        </button>
                        <span>
                            {isOpen
                                ? "Content is visible"
                                : "Content is hidden"}
                        </span>
                    </div>
                )}
            />

            <h3 className="text-lg font-semibold">
                Toggle — children as function
            </h3>

            <Toggle>
                {({ isOpen, open, close }) => (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={open}
                            className="px-3 py-1 border rounded"
                        >
                            Open
                        </button>
                        <button
                            onClick={close}
                            className="px-3 py-1 border rounded"
                        >
                            Close
                        </button>
                        <span>{isOpen ? "(opened)" : "(closed)"}</span>
                    </div>
                )}
            </Toggle>
        </div>
    );
}
