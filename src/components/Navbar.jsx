import logo from '../../public/logo.png'

export default function Navbar() {
  return (
    <div className="nav flex justify-between items-center shadow-md p-1">
      <div>
        <img src={logo}
        className='w-20'
        />
      </div>
      <ul className="flex gap-5">
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </ul>
    </div>
  );
}
// https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.627981&lng=77.3648567&str=khich search suggestion 
//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/071d07e5d5deb5e3da47feef18fb14fc
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6279168&lng=77.2124919&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
