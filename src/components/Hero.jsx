import { useNavigate } from "react-router";

const Hero = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/login")
    }
    
    return (
        <div
            className="hero min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[85vh] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://img.magnific.com/free-psd/3d-rendering-delivery-sales-blank-banner_23-2151558571.jpg?semt=ais_hybrid&w=740&q=80')",
            }}
        >
            <div className="hero-overlay bg-black/55"></div>

            <div className="hero-content w-full px-4 py-10 text-center text-neutral-content sm:px-6 md:px-8 lg:px-12">
                <div className="w-full max-w-3xl">

                    <div className="mb-4 sm:mb-5 md:mb-6">
                        <span className="rounded-full bg-primary/90 px-4 py-2 text-xs font-semibold sm:px-5 sm:text-sm">
                            Fast & Reliable Courier Service
                        </span>
                    </div>

                    <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                        Send Anything.
                        <br />
                        <span className="text-primary">
                            Anywhere, Anytime.
                        </span>
                    </h1>

                    <p className="mx-auto mb-6 max-w-2xl text-sm leading-6 text-gray-200 sm:mb-7 sm:text-base sm:leading-7 md:mb-8 md:text-lg md:leading-8 lg:text-xl">
                        Send your parcels quickly and securely with our
                        reliable courier service. Track your delivery,
                        manage shipments, and enjoy hassle-free delivery
                        from pickup to destination.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                        <button onClick={handleGetStarted} className="btn btn-primary w-full px-7 sm:w-auto sm:px-8 md:px-10">
                            Get Started
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
