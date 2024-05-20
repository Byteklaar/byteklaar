import {StepBorder} from "@/components/ui/StepBorder";

export function Step({text, counter}) {
    return (
        <div className="step flex w-2/5 lg:w-full row items-center my-2">
            <div className="flex-1 border-2 border-black py-6 px-8 rounded-full z-10 bg-white">
                <p>{text}</p>
            </div>
            <div className="flex-2 hidden lg:block">
                {counter < 4 && <StepBorder/>}
            </div>
        </div>
    );
}