import {StepBorder} from "@/components/ui/StepBorder";

export function BigStep({text, counter}) {
    return (
        <div className="flex w-full row items-center">
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
}