import React from "react";
import Link from 'next/link';
import Image from "next/image";
import myimage1 from "@/app/Assets/blush.jpg";
import myimage2 from "@/app/Assets/gloss1.jpg";
import myimage3 from "@/app/Assets/lipistick0.jpg";
import myimage4 from "@/app/Assets/highlighter1.jpg";

const page = () => {
 
  return (
    <>
      <div className="fullbg">
        <section className="p-6 bg-pink-400">
          <div className="flex justify-between text-white">
            <h1>beauty accessories</h1>
            <div>
              <ul className="flex gap-5 uppercase">
                <li>HOME</li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
                <li><Link href="/Services">Services</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <h1 className="text-center text-4xl font-bold ">Product Card</h1>
        <div className="parentContainer">
          <div className="childContainer  ">
            <div className="imgContainer"></div>
            <Image
              height={200}
              width={230}
              src={myimage4}
              alt="img"
              objectFit="cover"
            />
            <h2 className="title">Highlighter</h2>
            <p className="description">
              Neutral-pearly powder highlighter inspired by my AWARD-WINNING
              Pillow Talk shade for glowing, lifted, younger looking skin!
            </p>
            <p>$299</p>
          </div>
          <div className="childContainer">
            <div className="imgContainer"></div>
            <Image
              height={200}
              width={230}
              src={myimage3}
              alt="img"
              objectFit="cover"
            />
            <h2 className="title">Lipistick</h2>
            <p className="description">
              {" "}
              Smudge-proof, matte, transfer-proof, long-lasting lipistick that
              enhance your beauty in elegnat manner
            </p>
            <p>$399</p>
          </div>
          <div className="childContainer">
            <div className="imgContainer">
              <Image
                height={200}
                width={230}
                src={myimage2}
                alt="img"
                objectFit="cover"
              />
            </div>
            <h2 className="title">Gloss</h2>
            <p className="description">
              Pinkflash Ever Glossy Moist Lipgloss PF-L02 Lip gloss to make your
              lips more attractive
            </p>
            <p>$399</p>
          </div>
          <div className="childContainer">
            <div className="imgContainer overflow-hidden"></div>
            <Image
              height={200}
              width={230}
              src={myimage1}
              alt="img"
              objectFit="cover"
            />
            <h2 className="title">Blush</h2>
            <p className="description">
              Sheglam - Color Bloom Matte Liquid Blush makes your chicks pinky
              and glow.
            </p>
            <p>$399</p>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default page;
