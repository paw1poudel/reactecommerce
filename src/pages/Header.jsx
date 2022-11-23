import React from 'react'
import mainImage from "../images/p1.jpg"
import ImageMagnifier from '../components/ImageMagnifier'
function Header() {
  return (<header id='home'>
    <div className="div-container">
        <div className="header-text">
            <h1>
            Find All Your Need In One Place
            </h1>
            <p>
                We are here for you providing the best services with every kind of items needed day to day life at cheapest price and full guarantee
            </p>
            <a href="#products">SHOP NOW</a>
            </div>
            <div className="header-image">
            <ImageMagnifier
        width={"100%"}
        src={mainImage}
      />
        </div>
    </div>
    <svg width="1439" height="382" viewBox="0 0 1439 382" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M0 361.655C44.9624 361.655 44.9624 381 89.9375 381C134.9 381 134.9 361.655 179.875 361.655C224.837 361.655 224.837 381 269.813 381C314.775 381 314.775 361.655 359.737 361.655C404.7 361.655 404.7 381 449.662 381C494.625 381 494.625 361.655 539.6 361.655C584.562 361.655 584.562 381 629.537 381C674.512 381 674.512 361.655 719.475 361.655C764.437 361.655 764.437 381 809.412 381C854.387 381 854.387 361.655 899.35 361.655C944.325 361.655 944.325 381 989.287 381C1034.25 381 1034.25 361.655 1079.22 361.655C1124.2 361.655 1124.2 381 1169.16 381C1214.14 381 1214.14 361.655 1259.1 361.655C1304.07 361.655 1304.07 381 1349.05 381C1394.02 381 1394.02 361.655 1439 361.655M0 321.582C44.9624 321.582 44.9624 340.927 89.9375 340.927C134.9 340.927 134.9 321.582 179.875 321.582C224.837 321.582 224.837 340.927 269.813 340.927C314.775 340.927 314.775 321.582 359.737 321.582C404.7 321.582 404.7 340.927 449.662 340.927C494.625 340.927 494.625 321.582 539.6 321.582C584.562 321.582 584.562 340.927 629.537 340.927C674.512 340.927 674.512 321.582 719.475 321.582C764.437 321.582 764.437 340.927 809.412 340.927C854.387 340.927 854.387 321.582 899.35 321.582C944.325 321.582 944.325 340.927 989.287 340.927C1034.25 340.927 1034.25 321.582 1079.22 321.582C1124.2 321.582 1124.2 340.927 1169.16 340.927C1214.14 340.927 1214.14 321.582 1259.1 321.582C1304.07 321.582 1304.07 340.927 1349.05 340.927C1394.02 340.927 1394.02 321.582 1439 321.582M0 281.509C44.9624 281.509 44.9624 300.855 89.9375 300.855C134.9 300.855 134.9 281.509 179.875 281.509C224.837 281.509 224.837 300.855 269.813 300.855C314.775 300.855 314.775 281.509 359.737 281.509C404.7 281.509 404.7 300.855 449.662 300.855C494.625 300.855 494.625 281.509 539.6 281.509C584.562 281.509 584.562 300.855 629.537 300.855C674.512 300.855 674.512 281.509 719.475 281.509C764.437 281.509 764.437 300.855 809.412 300.855C854.387 300.855 854.387 281.509 899.35 281.509C944.325 281.509 944.325 300.855 989.287 300.855C1034.25 300.855 1034.25 281.509 1079.22 281.509C1124.2 281.509 1124.2 300.855 1169.16 300.855C1214.14 300.855 1214.14 281.509 1259.1 281.509C1304.07 281.509 1304.07 300.855 1349.05 300.855C1394.02 300.855 1394.02 281.509 1439 281.509M0 241.436C44.9624 241.436 44.9624 260.782 89.9375 260.782C134.9 260.782 134.9 241.436 179.875 241.436C224.837 241.436 224.837 260.782 269.813 260.782C314.775 260.782 314.775 241.436 359.737 241.436C404.7 241.436 404.7 260.782 449.662 260.782C494.625 260.782 494.625 241.436 539.6 241.436C584.562 241.436 584.562 260.782 629.537 260.782C674.512 260.782 674.512 241.436 719.475 241.436C764.437 241.436 764.437 260.782 809.412 260.782C854.387 260.782 854.387 241.436 899.35 241.436C944.325 241.436 944.325 260.782 989.287 260.782C1034.25 260.782 1034.25 241.436 1079.22 241.436C1124.2 241.436 1124.2 260.782 1169.16 260.782C1214.14 260.782 1214.14 241.436 1259.1 241.436C1304.07 241.436 1304.07 260.782 1349.05 260.782C1394.02 260.782 1394.02 241.436 1439 241.436M0 201.364C44.9624 201.364 44.9624 220.709 89.9375 220.709C134.9 220.709 134.9 201.364 179.875 201.364C224.837 201.364 224.837 220.709 269.813 220.709C314.775 220.709 314.775 201.364 359.737 201.364C404.7 201.364 404.7 220.709 449.662 220.709C494.625 220.709 494.625 201.364 539.6 201.364C584.562 201.364 584.562 220.709 629.537 220.709C674.512 220.709 674.512 201.364 719.475 201.364C764.437 201.364 764.437 220.709 809.412 220.709C854.387 220.709 854.387 201.364 899.35 201.364C944.325 201.364 944.325 220.709 989.287 220.709C1034.25 220.709 1034.25 201.364 1079.22 201.364C1124.2 201.364 1124.2 220.709 1169.16 220.709C1214.14 220.709 1214.14 201.364 1259.1 201.364C1304.07 201.364 1304.07 220.709 1349.05 220.709C1394.02 220.709 1394.02 201.364 1439 201.364M0 161.291C44.9624 161.291 44.9624 180.636 89.9375 180.636C134.9 180.636 134.9 161.291 179.875 161.291C224.837 161.291 224.837 180.636 269.813 180.636C314.775 180.636 314.775 161.291 359.737 161.291C404.7 161.291 404.7 180.636 449.662 180.636C494.625 180.636 494.625 161.291 539.6 161.291C584.562 161.291 584.562 180.636 629.537 180.636C674.512 180.636 674.512 161.291 719.475 161.291C764.437 161.291 764.437 180.636 809.412 180.636C854.387 180.636 854.387 161.291 899.35 161.291C944.325 161.291 944.325 180.636 989.287 180.636C1034.25 180.636 1034.25 161.291 1079.22 161.291C1124.2 161.291 1124.2 180.636 1169.16 180.636C1214.14 180.636 1214.14 161.291 1259.1 161.291C1304.07 161.291 1304.07 180.636 1349.05 180.636C1394.02 180.636 1394.02 161.291 1439 161.291M0 121.218C44.9624 121.218 44.9624 140.564 89.9375 140.564C134.9 140.564 134.9 121.218 179.875 121.218C224.837 121.218 224.837 140.564 269.813 140.564C314.775 140.564 314.775 121.218 359.737 121.218C404.7 121.218 404.7 140.564 449.662 140.564C494.625 140.564 494.625 121.218 539.6 121.218C584.562 121.218 584.562 140.564 629.537 140.564C674.512 140.564 674.512 121.218 719.475 121.218C764.437 121.218 764.437 140.564 809.412 140.564C854.387 140.564 854.387 121.218 899.35 121.218C944.325 121.218 944.325 140.564 989.287 140.564C1034.25 140.564 1034.25 121.218 1079.22 121.218C1124.2 121.218 1124.2 140.564 1169.16 140.564C1214.14 140.564 1214.14 121.218 1259.1 121.218C1304.07 121.218 1304.07 140.564 1349.05 140.564C1394.02 140.564 1394.02 121.218 1439 121.218M0 81.1455C44.9624 81.1455 44.9624 100.491 89.9375 100.491C134.9 100.491 134.9 81.1455 179.875 81.1455C224.837 81.1455 224.837 100.491 269.813 100.491C314.775 100.491 314.775 81.1455 359.737 81.1455C404.7 81.1455 404.7 100.491 449.662 100.491C494.625 100.491 494.625 81.1455 539.6 81.1455C584.562 81.1455 584.562 100.491 629.537 100.491C674.512 100.491 674.512 81.1455 719.475 81.1455C764.437 81.1455 764.437 100.491 809.412 100.491C854.387 100.491 854.387 81.1455 899.35 81.1455C944.325 81.1455 944.325 100.491 989.287 100.491C1034.25 100.491 1034.25 81.1455 1079.22 81.1455C1124.2 81.1455 1124.2 100.491 1169.16 100.491C1214.14 100.491 1214.14 81.1455 1259.1 81.1455C1304.07 81.1455 1304.07 100.491 1349.05 100.491C1394.02 100.491 1394.02 81.1455 1439 81.1455M0 41.0727C44.9624 41.0727 44.9624 60.4182 89.9375 60.4182C134.9 60.4182 134.9 41.0727 179.875 41.0727C224.837 41.0727 224.837 60.4182 269.813 60.4182C314.775 60.4182 314.775 41.0727 359.737 41.0727C404.7 41.0727 404.7 60.4182 449.662 60.4182C494.625 60.4182 494.625 41.0727 539.6 41.0727C584.562 41.0727 584.562 60.4182 629.537 60.4182C674.512 60.4182 674.512 41.0727 719.475 41.0727C764.437 41.0727 764.437 60.4182 809.412 60.4182C854.387 60.4182 854.387 41.0727 899.35 41.0727C944.325 41.0727 944.325 60.4182 989.287 60.4182C1034.25 60.4182 1034.25 41.0727 1079.22 41.0727C1124.2 41.0727 1124.2 60.4182 1169.16 60.4182C1214.14 60.4182 1214.14 41.0727 1259.1 41.0727C1304.07 41.0727 1304.07 60.4182 1349.05 60.4182C1394.02 60.4182 1394.02 41.0727 1439 41.0727M0 1C44.9624 1 44.9624 20.3455 89.9375 20.3455C134.9 20.3455 134.9 1 179.875 1C224.837 1 224.837 20.3455 269.813 20.3455C314.775 20.3455 314.775 1 359.737 1C404.7 1 404.7 20.3455 449.662 20.3455C494.625 20.3455 494.625 1 539.6 1C584.562 1 584.562 20.3455 629.537 20.3455C674.512 20.3455 674.512 1 719.475 1C764.437 1 764.437 20.3455 809.412 20.3455C854.387 20.3455 854.387 1 899.35 1C944.325 1 944.325 20.3455 989.287 20.3455C1034.25 20.3455 1034.25 1 1079.22 1C1124.2 1 1124.2 20.3455 1169.16 20.3455C1214.14 20.3455 1214.14 1 1259.1 1C1304.07 1 1304.07 20.3455 1349.05 20.3455C1394.02 20.3455 1394.02 1 1439 1" stroke="url(#paint0_linear_8_327)" strokeMiterlimit="10"/>
<defs>
<linearGradient id="paint0_linear_8_327" x1="719.5" y1="391.5" x2="719.5" y2="29.5" gradientUnits="userSpaceOnUse">
<stop stopColor="#B27C64"/>
<stop offset="1" stopColor="#B27C64" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>

</header>
  )
}

export default Header