const date = new Date();
const year = date.getFullYear();

export const Footer = () => {
    return (
        <footer className="footer py-12 relative overflow-hidden">
            <div className="inner-container max-w-[512px] mx-auto wrap-px relative z-10">
                <section className="footer-credit relative z-10 pt-8">
                    <div className="wrap grid text-center relative">
                        <div className="footer-credit--item flex flex-wrap justify-center ">
                            <p className="my-0 text-secondary-300">
                                ©{year} edme. All rights reserved.{" "}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};
