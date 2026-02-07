import { useState } from "react";

export default function Toggle({ children, render }) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((v) => !v);

    const props = { isOpen, open, close, toggle };

    if (typeof render === "function") return render(props);
    if (typeof children === "function") return children(props);
    return null;
}
