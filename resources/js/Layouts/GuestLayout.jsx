import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">

            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <div>
                <Link href="/">
                    <img src='/image/logo_perpusku2.png' className="mx-auto my-3 text-gray-500 fill-current w-30" />
                </Link>
            </div>
                {children}
            </div>
        </div>
    );
}
