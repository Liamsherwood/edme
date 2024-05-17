import Link from "next/link";
import dynamic from 'next/dynamic';
import { EnvelopeIcon } from "@heroicons/react/24/outline";
const SubstackEmbed = dynamic(() => import("../components/global/substack"), { ssr: false });
const Logo = dynamic(() => import("../components/global/animation.jsx"), { ssr: false });

export default function Home() {
    return (
        <section className="wrap-md w-full wrap-px pt-4 mx-auto">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 md:col-span-6">
                    <div className="flex h-full flex-wrap gap-4 content-center bg-gray-900 sm:aspect-auto relative p-8 sm:p-12 border border-neutral-400/30 rounded-xl shadow-sm overflow-hidden ">
                        <div className="content flex gap-4 flex-wrap max-w-60 sm:max-w-72 md:max-w-52 lg:max-w-64 relative z-10">
                            <h1 className="font-bold text-2xl sm:text-4xl md:text-7xl mb-0 text-white-50">Coming soon...</h1>
                            <p className="text-white-50">In the meantime, sign up for our newsletter to stay up to date.</p>
                        </div>
                        <div className="sm:flex w-full md:w-auto max-w-64 md:max-w-48 lg:max-w-80 z-10 flex items-center">
                            <SubstackEmbed />
                        </div>
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-4">
                    <div className="flex flex-wrap h-full gap-4 content-start bg-gradient-linear relative p-8 sm:p-12 border border-primary-500 rounded-xl">
                        <div className="content w-full h-full flex content-end flex-wrap">
                            <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-white-50">
                                Our Mission: Unlocking human potential through accessible learning.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                    <Link
                        href="#"
                        className="flex flex-wrap gap-4 content-start bg-gray-900 relative py-4 px-12 border border-neutral-400/30 rounded-xl shadow-sm overflow-hidden hover:bg-primary-100 transition-colors duration-300">
                        <div className="content w-full text-white text-center">
                            <span className="font-bold">Updates</span>
                        </div>
                    </Link>
                </div>
                <div className="col-span-6 sm:col-span-2 lg:col-span-3">
                    <div className="flex flex-wrap gap-4 h-full content-start bg-gray-900 relative p-8 sm:p-12 border border-neutral-400/30 rounded-xl">
                        <div className="grid gap-12">
                            <div className="content grid gap-4">
                                <h2 className="font-semibold text-xl mb-0 text-white-50">Story</h2>
                                <p className="text-white-50">two dudes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-2 lg:col-span-3">
                    <div className="flex flex-wrap gap-4 h-full content-start bg-gray-900 relative p-8 sm:p-12 border border-neutral-400/30 rounded-xl">
                        <div className="grid gap-12">
                            <div className="content grid gap-4">
                                <h2 className="font-semibold text-xl mb-0 text-white-50">Philosophy</h2>
                                <p className="text-white-50">Fuck around and find out.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="flex flex-wrap gap-4 content-start bg-gray-900 relative p-8 sm:p-12 border sm:aspect-square md:aspect-auto lg:aspect-[3/1] border-neutral-400/30 rounded-xl shadow-sm overflow-hidden">
                        <div className="image-container flex w-full h-full items-center flex-1">
                            <div className="flex flex-wrap max-w-[512px] gap-8 relative z-10">
                                <span className="block text-xl sm:text-3xl font-bold text-white-50">Looking for an awesome group of people to work with.</span>
                                <a href="https://www.linkedin.com/in/liam-sherwood/" className="block text-xl sm:text-3xl font-bold hover:underline hover:decoration-wavy text-primary-500 underline-offset-4">
                                    Let's Connect!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center pt-4">
                <div className="flex justify-center items-center col-span-6 sm:col-span-1">
                    <Link
                        href="/contact"
                        className="flex flex-wrap gap-4 content-start bg-primary-500 relative py-4 px-12 border border-neutral-400/30 rounded-xl shadow-sm overflow-hidden  hover:bg-primary-100 transition-colors duration-300"
                    >
                        <EnvelopeIcon className="h-6 w-6 text-white stroke-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}