import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div>
                <Link href="/">
                    <img src={`/storage/image/logo_perpusku2.png`} className="w-30 fill-current text-gray-500 mx-auto  my-3" />
                </Link>
            </div>
                {children}
            </div>
        </div>
    );
}
