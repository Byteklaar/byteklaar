import {StepBorder} from "@/components/ui/StepBorder";

export function Step({text, counter}) {
    return (
        <div className="flex w-full row items-center">
            <div className="flex-1 border border-black py-6 px-8 rounded-full z-10 bg-white">
                <p>{text}</p>
            </div>
            <div className="flex-2">
                {counter < 5 && <StepBorder/>}
            </div>
        </div>
    );
}