import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div id="projects" className="px-4 pt-14">
      <div>
        <h1 className="text-[2rem] font-bold">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/siteScreenShot2.png"
              alt="projPic"
            />
          </figure>
          <div className="card-body bg-jGrey">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top text-jcream">
                This Website!
              </h2>
              <p className="relative italic">
                React, Next.js, TypeScript, DaisyUI, Tailwind CSS, Amazon S3
              </p>
            </span>
            <p className="text-jcream">
              The website that you are currently using was curated by me! Check
              out my code on GitHub.
            </p>

            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://github.com/joban-natt/joban-website"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/EndlessRunner.png"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                Endless Runner Game
              </h2>
              <p className="relative italic">
                3D Printing, Machine Shop, R&D, Rapid Prototyping, Reporting
              </p>
            </span>

            <p className="text-jcream">
              For our ME100 project, my team and I built an endless runner game
              inspired by subway surfers, but in real life. The project required
              us to produce <b>prototypes</b> and design complex systems within
              a short deadline. This included <b>3D-printed pulleys</b> to
              translate the forces, a wooden chassis, and a treadmill to
              simulate an infinite track. We created a proposal for our final
              product and a <b>report</b> of choices, problems, solutions, and
              feasibility analysis.
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1jlw47AlU1lE4gaOWQ1U2h57-mtIp568-/view?usp=sharing"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  Demo Vid
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/hallEffect.png"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                Hall Effect Potentiometer
              </h2>
              <p className="relative italic">
                R&D, EasyEDA, Soldering, 3D Printing, I2C
              </p>
            </span>

            <p className="text-jcream">
              Created circuit schematics for <b>PCBs</b> with <b>EasyEDA</b> as
              well as a <b>3D printed</b> housing with <b>SOLIDWORKS</b> in
              accordance to the physical dimensions of a Dualshock4
              controllers&apos; joystick. Implemented a hall effect sensor that
              detects <b>rotating magnetic fields</b> and acts as a
              potentiometer to <b>minimize electronic noise</b> and interference
              caused by wear and tear of physical potentiometers, thus{" "}
              <b>massively increasing longevity</b> of the controller.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img src="" alt="Surgical Arm Picture" />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top text-jcream">
                Surgical Arm
              </h2>
              <p className="relative italic">
                Python, Arduino, Intgrated Circuits
              </p>
            </span>
            <p className="text-jcream">
              During this 36-hour Hackathon, my team and I built a 2-axis{" "}
              <b>robotic arm</b> with a pincer at the end. The joints were
              controlled by the user moving their own arms through a camera
              running <b>OpenCV</b> (open computer vision). The chassis was
              built with popsicle sticks since they were easily accessible,
              strong, and lightweight. The L239D was used to control the{" "}
              <b>DC motors</b> and the ULN2003 was used to drive the 28BYJ-48{" "}
              <b>stepper motor</b>. This provided good experience with{" "}
              <b>integrated circuits</b>, as well as Arduino{" "}
              <b>microcontrollers</b>.
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://github.com/Joban-Natt/joban-website"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/PianoMotors.jpeg"
              alt="Piano With Motors"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top text-jcream">
                Autonomous Piano Player
              </h2>
              <p className="relative italic">
                Motors/Motor Control, Basic Analogue Circuits, BreadBoards,
                Python
              </p>
            </span>

            <p className="text-jcream">
              For the <b>MakeUofT</b> Hackathon, we used two 28BYJ stepper
              motors and two <b>Nema-17</b> stepper motors controlled by an{" "}
              <b>Arduino</b> running <b>pyfirmata2</b> to play a song in
              C-Major. The user must upload a .wav file into the software and it
              will use <b>Fourier analysis</b> to break up the sound into its
              constituent frequencies. The note is then mapped to a stepper
              motor that turns in the direction of the key.{" "}
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://devpost.com/software/happy-keys"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  Devpost
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/AirplaneGamePic.png"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                Airplane Shooter Game
              </h2>
              <p className="relative italic">HTML, JavaScript, CSS</p>
            </span>

            <p className="text-jcream">
              My first experience with object-oriented programming was making
              this Airplane Game where the objective is to destroy the other
              plane. The game uses the users&apos; keyboard input to move the
              planes around and shoot. Although simplistic, it was an extremely
              informative introduction to <b>performance optimization</b>,{" "}
              <b>event handlers</b>, and <b>objects</b>.
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/game/Plane-Shooting-Game/index.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJIMEYCIQDBc%2Bc54v7ZFHjeQ%2BSdPyvFoap3mQQt7M77AAlFzuPI%2BgIhAL8q5kgpDwwLzK7hf1TTpwXraKEa09GG3RDb0jlHvBXDKugCCFkQARoMMzQwNjg1MjYyODAwIgwUY%2BG6jaQRbAh2W8IqxQL7D4Qwak3eQtgfXFH6uPMdSOXkifqOSH0QcwwQou9xeV9V9ie4%2BQJDgl95uAq%2Bkrvmj%2BhWwl%2BqTohtChZYATX2txzN2rflkSosguP72BQ9wUNWLmKBbOCp1wwVBid8c7l%2BiMCPY2etEWUnLfrK7mUcWR2ZQyFVTadnYQ5rL%2FdIg3Dr4x9jVZQWqF10OgKEDmFtZsGwBQ40skzy%2FKjIQttZVrhYoRt0NXiZbDbyRPvRaNMj5F4FlGuiylVl%2BbmCS%2BSOVUCbGpAaMwoYRuwT2M1lKR0zvEjaZregQ3Iub%2BL0NS57IKA2yuI780ISE%2BGK8K6QBk3b%2BGfEFxYYxhL8PFL%2FecdV1v4WeSCywTawYYstsaocx3uP6qteDqSF1rxEtVZMq16jlnZsaVy8mp8G6LMvbblLcFe3GsH32ZEjB8s6Gif3TasHMMPtgbIGOrICyceNCZjLIYs1wy5pwT8QVNS4kam67Hb17%2FWvKfatfrhpz9CjA5vJRDamwOhMfcMO8oLOD4s5mgstVYVtf7YW6%2Bd73cDoWQi%2B6oTjKewk%2B%2FJhpFyiYMdl7BmrrfCgkNFZLfjkS6EqtBn2DzwMZMVKmb8oguKLtARWt6ZQ1JHQZg%2FnaaB%2F0bS3gzF12tsrh0DSyQgFFPO4GE7C5EDvego2SF70pGd8k293u3npHYhpQC1rjU7BLcnRfygYKgnRpfsxRMOkU30ggvG9e1GUuNtGT9Uc6PSz%2BeifaVds925P%2FKov272RGH4mR6lSXmpuPdkQRaQHRErXgRmOTs7hBRFmWC%2FePtqnPPUIJKhize7EcmC367aQlvZgHG6jJ1at3LMK4ArtriOBCat%2BtLtAFQ%2BUSCsH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240512T172908Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAU6UTMR7IFGCPRA7R%2F20240512%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=e09e1ef12b9844f96aab225c6bce1d461dc53318ad01f34a7c3b3928d3fe6175"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  Play!
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/CaSinoProposal.png"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                Casino++
              </h2>
              <p className="relative italic">C++</p>
            </span>

            <p className="text-jcream">
              {" "}
              A Virtual Casino built entirely from <b>C++</b>. Includes games
              like “Blackjack” and “War” and multiple slots games, being Binary
              Slots, Decimal Slots, and Hexadecimal Slots. (Only slots are
              available, I am trying to recover the other code)
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://github.com/Joban-Natt/Practice-Fundamentals/blob/main/c++Fundementals/allSlots.cpp"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
