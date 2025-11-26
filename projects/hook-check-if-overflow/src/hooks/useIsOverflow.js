import { useLayoutEffect, useState } from "react"

export const useIsOverflow = (ref, callback) => {
    const [isOverflow, setIsOverflow] = useState(undefined);

    useLayoutEffect(() => {
        const { current } = ref;

        const trigger = () => {
            const hasOverflow = current.scrollWidth > current.clientWidth;

            setIsOverflow(hasOverflow);

            if (callback) callback(hasOverflow);
        }

        if (current) {
            if ('ResizeObserver' in window) {
                new ResizeObserver(trigger).observe(current);
            }
        }

        if (current) {
            trigger();
        }
    }, [ref, callback]);

    return isOverflow;
}