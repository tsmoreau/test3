import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../../../components/Utils/Account";
import Nav from "../../../components/Layout/Nav";
import Footer from "../../../components/Layout/Footer";
import useEagerConnect from "../../../hooks/useEagerConnect";

import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="640"
      height="320"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>Anthromancer - Yggdrasil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="bg-black text-white">
        <div className="w-screen flex">
          <div
            id="scroller"
            className="snap-y snap-mandatory w-8/12 h-156 overflow-scroll"
          >
            <div className="relative snap-start  bg-black w-full h-156 flex flex-col text-center items-center justify-center text-base px-36">
              <div className="-mt-8 w-full relative">
                <p className="text-3xl font-bold absolute -top-12 -left-6">
                  The Beginning
                </p>
                <span className="bg-yggpurple-300 h-px w-60 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-60 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-60 absolute -translate-y-2 top-0 -left-6"></span>

                <p className="pt-6">
                  <span className="italic">"What IS this place?"</span> Roxas
                  asks, gazing up into the branches of the pale tree...
                </p>
                <p className="pt-6">
                  <span className="italic">
                    "It is the place beyond the place,"
                  </span>{" "}
                  the Fox replies,{" "}
                  <span className="italic">
                    "The time from which ALL times begin..."
                  </span>
                </p>
                <p className="pt-6 leading-relaxed">
                  As a token of our gratitude for their support, every verified
                  backer of the 2020 Anthromancer Kickstarter Campaign is
                  eligible to claim a single limited edition “Yggdrasil” NFT,
                  secured on the Ethereum blockchain for all time. These ERC-721
                  tokens will enable the holder to participate in secret
                  experiences, grant special access to playtesting and live
                  events, and unlock discounts on future NFT drops and gaming
                  applications, for the life of the Anthromancer brand. Gas for
                  claiming has been prepaid, and the claim codes distributed via
                  email do not expire. We are moved by your support, and are
                  grateful for the opportunity to repay you in some small way.
                  Thank you.
                </p>
              </div>
              <div className="absolute bottom-0 -translate-y-16">
                <p className=" text-lg font-bold">How to Get Started...</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="flex mx-auto mt-4 translate-y-0 animate-bounce"
                  stroke="#67e8f9"
                  strokeWidth="3px"
                >
                  <path d="M12 21l-12-18h24z" />
                </svg>
              </div>
            </div>
            <div className="relative snap-start bg-black w-full h-156 flex flex-col text-center items-center justify-center text-base px-36">
              <div className="-mt-8 w-full relative">
                <p className="text-3xl font-bold absolute -top-12 -left-6">
                  How to Get Started
                </p>
                <span className="bg-yggpurple-300 h-px w-72 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-72 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-72 absolute -translate-y-2 top-0 -left-6"></span>

                <div className="w-full border mt-3">
                  <YoutubeEmbed embedId="rokGy0huYEA" />
                </div>
              </div>
              <div className="absolute bottom-0 -translate-y-16">
                <p className=" text-lg font-bold">The Steps...</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="flex mx-auto mt-4 translate-y-0 animate-bounce"
                  stroke="#67e8f9"
                  strokeWidth="3px"
                >
                  <path d="M12 21l-12-18h24z" />
                </svg>
              </div>
            </div>
            <div className="relative snap-start bg-black w-full h-156 flex flex-col text-center items-center justify-center text-base px-36">
              <div className="-mt-8 relative w-full">
                <p className="text-3xl font-bold absolute -top-12 -left-6">
                  The Steps.
                </p>
                <span className="bg-yggpurple-300 h-px w-40 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-40 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-40 absolute -translate-y-2 top-0 -left-6"></span>

                <p className="pt-6 text-xl font-bold text-left left-0">
                  1) Setup Your Metamask
                </p>
                <p className="px-8 pt-3 text-sm">
                  Download and install the Metamask browser extension. You can
                  do so by navigating to the Metamask website and following the
                  instructions from this ONE37pm article here. After you set up
                  your Metamask Wallet and open the extension, you will be
                  prompted to choose a password and to write down a list of
                  words called a 'seed phrase'. Write these words down on a
                  piece of paper and store it somewhere safe and secure. Don't
                  store your seed phrase in a file on your computer, because if
                  someone can hack your computer, they could find this file and
                  use it to steal the contents of your wallet.
                </p>
                <p className="pt-6 text-xl font-bold text-left left-0">
                  2) Connect to this Site
                </p>
                <p className="px-8 pt-3">
                  When you wallet is set up, connect it to our website using the
                  'Connect Wallet' button (top right).
                </p>
                <p className="pt-6 text-xl font-bold text-left left-0">
                  3) Claim your NFT
                </p>
                <p className="px-8 pt-3">
                  Click 'Claim Your NFT', and sign the transaction using your
                  metamask wallet. The token will be automatically transferred
                  into your account. It may take up to 10 minutes for this
                  transaction to be fully confirmed; if you don't see it
                  immediately, wait for a few minutes. Once the token has
                  transferred, you ought to be able to look at your account on
                  Opensea.io or Etherscan.io and see the token on display. If
                  you have any technical difficulties with this process, reach
                  out to us and we'll see if we can help.
                </p>
              </div>
              <div className="absolute bottom-0 -translate-y-16">
                <p className=" text-lg font-bold">Congratulations!!!</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="flex mx-auto mt-4 translate-y-0 animate-bounce"
                  stroke="#67e8f9"
                  strokeWidth="3px"
                >
                  <path d="M12 21l-12-18h24z" />
                </svg>
              </div>
            </div>
            <div className="relative snap-start bg-black w-full h-156 flex flex-col text-center items-center justify-center text-base px-36">
              <div className="-mt-8 w-full relative">
                <p className="text-3xl font-bold absolute -top-12 -left-6">
                  Congratulations! Now What?
                </p>
                <span className="bg-yggpurple-300 h-px w-96 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-96 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-96 absolute -translate-y-2 top-0 -left-6"></span>

                <p className="pt-6 leading-relaxed">
                  Now that you hold an Anthromancer NFT, you will be eligible to
                  receive discounts on future Anthromancer NFT drops, early
                  access to beta testing for chain-based games and apps we
                  develop, and access to a special community of dedicated fans
                  and builders organized via our community discord server. All
                  you have to do is protect your wallet and seed phrase, and
                  keep the token safe within it.
                </p>
                <p className="pt-6 leading-relaxed">
                  You are also free to sell your token on a marketplace such as
                  Opensea.io, to trade it for other tokens via a service such as
                  sudoswap, to display it in a virtual gallery such as
                  OnCyber.io to build applications that use it and increase its
                  perceived utility, or to hold it and forget you even have it
                  until it becomes useful to you down the road. We intend to
                  develop all of our future games and applications so that
                  holders of these early tokens are given special consideration
                  and novel powers in Anthromancer experiences. If you believe
                  in us, we will find ways to reward you for that belief. This
                  token is our opportunity to deliver value to those who
                  believed in us from the outset, and we find great joy in
                  knowing we can express our gratitude to you, forever, thanks
                  to the mechanism of tokenized assets. Thank you for playing
                  along; we look forward to the next time we can play together.
                </p>
              </div>
              <div className="absolute bottom-0 -translate-y-16">
                <p className=" text-lg font-bold">
                  What's next for Anthromancer?
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="flex mx-auto mt-4 translate-y-0 animate-bounce"
                  stroke="#67e8f9"
                  strokeWidth="3px"
                >
                  <path d="M12 21l-12-18h24z" />
                </svg>
              </div>
            </div>
            <div className="snap-start bg-black w-full h-156 flex flex-col text-center items-center justify-center text-base px-36">
              <div className="-mt-8 w-full relative">
                <p className="text-3xl font-bold absolute -top-12 -left-6">
                  What's Next for Anthromancer?
                </p>
                <span className="bg-yggpurple-300 h-px w-72 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-72 absolute -translate-y-2 top-0 -left-6"></span>
                <span className="bg-yggpurple-300 h-px w-72 absolute -translate-y-2 top-0 -left-6"></span>

                <p className="pt-6">
                  <span className="italic">"What IS this place?"</span> Roxas
                  asks, gazing up into the branches of the pale tree...
                </p>
                <p className="pt-6">
                  <span className="italic">
                    "It is the place beyond the place,"
                  </span>{" "}
                  the Fox replies,{" "}
                </p>
                <p className="pt-6 leading-relaxed">
                  In the following months and years Anthromancer will release a
                  series of NFT projects which will connect a strong community
                  of friends, fans, gamers and builders. By incentivizing the
                  creation of this community via value-sharing and giveaways, we
                  hope to spark a self-sustaining energy that will carry this
                  brand and the products associated with it to widespread
                  adoption, and through that adoption, change the world. If
                  you'’'d like to know more about our mid- and long-term vision,
                  we invite you to take a look at our Road Map.
                </p>
                <span className="italic">
                  This is Anthromancer. We are pleased to Welcome You to The
                  Enlightenment Machine.
                </span>
              </div>
              <div className="hidden absolute bottom-0 -translate-y-16">
                <p className=" text-xl font-bold">
                  5. What's next for Anthromancer ..?
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="flex mx-auto mt-4 translate-y-0 animate-bounce"
                  stroke="#67e8f9"
                  strokeWidth="3px"
                >
                  <path d="M12 21l-12-18h24z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-4/12 text-center mx-auto">
            <div className="w-8/12 flex mx-auto rounded-lg mt-4">
              <img id="NFT" src="/yggdrasil.png" />
            </div>
            <p className="text-3xl font-bold">∞. Yggdrasil</p>
            <p className="font-sans px-12 pt-3 text-sm">
              <p>
                In Norse mythology, Yggdrasil is the massive tree whose roots
                and branches stretch through the nine realms of time and space.
                The concept of a great tree on whose body rests the world,
                though, transcends any culture, and the four-dimensional
                structure of spacetime evokes a similar metaphor.
              </p>

              <p className="mt-4">
                We are the fruit of the tree of time, and as we are born we
                become its stewards. In this token we see the image of a tree
                appearing in front of metatron’s cube, a sacred geometric design
                which contains schematic information for all of the platonic
                solids, those mathematically perfect shapes that were once
                theorized to be the building blocks of reality. Yggdrasil is the
                icon of cosmic unity; the blend between the divine feminine
                chaos of nature, and the divine masculine order of math.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }

        @font-face {
          font-family: myFirstFont123;
          src: url(/fonts/BlankRiver.ttf);
        }

        #depict,
        #depict3 {
          font-family: myFirstFont123;
          text-shadow: 1px 1px white;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        #scroller {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        #NFT {
          -moz-animation: spinHorizontal 10s infinite linear;
          -o-animation: spinHorizontal 10s infinite linear;
          -webkit-animation: spinHorizontal 10s infinite linear;
          animation: spinHorizontal 10s infinite linear;
        }

        @keyframes spinHorizontal {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
        }

        html {
          font-family: sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
          line-height: 1.5;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
