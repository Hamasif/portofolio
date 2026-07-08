import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const FlickeringBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

            <FlickeringGrid
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    [mask-image:radial-gradient(circle_at_center,white,transparent)]
                "
                squareSize={4}
                gridGap={6}
                color="#00F5C3"
                maxOpacity={0.25}
                flickerChance={0.08}
                width={3000}
                height={3000}
            />

        </div>
    );
};

export default FlickeringBackground;