import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-16 lg:gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <Link href="/">
            <div className="text-2xl tracking-wide font-bold">NEW</div>
          </Link>
          <p className="text-gray-600">
            592-D Sector-K Aashiana Colony Lucknow
          </p>
          <span className="font-semibold">sarandevanshu4545@gmail.com</span>
          <span className="font-semibold">+91 7309444222</span>
          <div className="flex gap-6 mt-4">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={16}
              height={16}
              className="hover:opacity-75 transition-opacity duration-300"
            />
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={16}
              height={16}
              className="hover:opacity-75 transition-opacity duration-300"
            />
            <Image
              src="/youtube.png"
              alt="YouTube"
              width={16}
              height={16}
              className="hover:opacity-75 transition-opacity duration-300"
            />
            <Image
              src="/pinterest.png"
              alt="Pinterest"
              width={16}
              height={16}
              className="hover:opacity-75 transition-opacity duration-300"
            />
            <Image
              src="/x.png"
              alt="X"
              width={16}
              height={16}
              className="hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2 gap-12">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-4 mt-4 text-gray-600">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-4 mt-4 text-gray-600">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-4 mt-4 text-gray-600">
              <Link href="/">Customer Service</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p className="text-gray-600">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="w-1/4 bg-black text-white font-semibold rounded-r-md hover:bg-gray-800 transition-colors">
              JOIN
            </button>
          </div>
          <span className="font-semibold mt-4">Secure Payments</span>
          <div className="flex justify-between mt-2">
            <Image src="/discover.png" alt="Discover" width={40} height={20} />
            <Image src="/skrill.png" alt="Skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="Paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="Mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 border-t pt-8">
        <div className="text-gray-600">© 2024 New Shop</div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="text-gray-600">
            <span className="text-gray-500 mr-2">Language</span>
            <span className="font-medium">India | English</span>
          </div>
          <div className="text-gray-600">
            <span className="text-gray-500 mr-2">Currency</span>
            <span className="font-medium">Rupees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
