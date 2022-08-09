import React from "react";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TagFilled } from "@ant-design/icons";
import { Button, Radio } from "antd";

const responsive = {
  Mx: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  Lg: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  Md: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5,
  },
  Sm: {
    breakpoint: { max: 464, min: 0 },
    items: 1.3,
  },
};

export default function Brands() {
  return (
    <div>
      <div>
        <Carousel
          responsive={responsive}
          minimumTouchDrag={50}
          arrows={false}
          autoPlay={false}
        >
          <div>
            <div className="w-56 mr-2 rounded-lg">
              <div className="border rounded-lg bg-white flex flex-col items-center py-2 px-3">
                <img
                  src="https://mma.prnewswire.com/media/1629078/Lyric_Logo.jpg?p=facebook"
                  alt="123"
                  className="w-32 rounded-full h-32 object-center object-cover group-hover:opacity-75 shadow-img"
                />
                <div className="flex flex-col items-center">
                  <h1 className="mb-1 px-2 text-lg content-center py-2">
                    Lyric
                  </h1>

                  <p className="mb-1 p-1 px-3 text-md autolayout text-white font-medium pr-2 content-center bg-yellow-600 rounded-full">
                    <TagFilled /> 20% OFF
                  </p>
                </div>
                <button className="w-full h-12 p-2 mx-2 my-2 bg-glimpse text-white">
                  View Coupon Code
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="w-56 mr-2 rounded-lg">
              <div className="border rounded-lg bg-white flex flex-col items-center py-2 px-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///8hHVUfG1QdGFP+/f82M2cAAEkWEVAbFlIAAEsZFFEPCE0UDk8AAEgYE1AOBk0LAEzv7vNJRnAAAEWMi6OIhqBraYj19fjHxtDq6u/X1uCtrL6/vszi4eg9Omi6ucmiobWAfpt1c5KlpLgsKF44NWRbWX9QTXbPztmamK+8u8qWlKx6eJYwLF9cWoBlY4dLSXMpJV9SUHaSOhmgAAAOWklEQVR4nO1d23aqOhTVhMotSkAFBcG7YhVv//9xx7anSVAIQQl2j8F82fvBQibJuq8krVaDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNJAAOwzj6WwwX7gn13UXh+EuGPnh2Hv3uKqAZ8fLoeuskN7BlonULyBkYr1jgeh42E/+bZphMNyiPjZVDYD2AwDsIaurrxc7X3n3SJ+BPZ2v+rqpZVBLAyLcR+4y/LdYjqduopqwiBydTtVsb/4dkt5oHplInN4PR9CzEndqv3vwAhgHV6vE7LG4rVdnH76bQAHC4aVjPEXvZyYhVl3/3SQ48Bda2dX5SFJFp9G7ieTAP6xQruYEN0mDEGpfuP0LQJb9+OUI3PjdZDJg74GZN2iILGS0kyRynPP27DjROlkBZJm9nD8ASJ3/OXkMEpw1XKCZeh9Hi10w8cfeDYqifP1j37y45XBz6XexmrWugQl3f8p2+FHncZwAoq61HQQcM6fYk5276lrG49cBGE5qZMCHt1e1R3omjg5TAa9Tsf39xtAfSULzMK5h9ALwrw8LFPRwNI/FzbcXzq7GgxUFVvQpcdzCmBnqgxAZm0npkMEfXvD9UtD0+dul0T717yYQYuNJx8QLIv3uawE9erMDMFqb9/yi2QsR3+SE1fQX68GguuGWR3BJu2jQjGavOc/K5IjTERdE87cFycoAp5WDehm8rv2UILpzjTrum3Sqd+jeqYVTNTJjDzBKPRmf3+LhjDd6ehjr6ix0eNJTqwOt3uCojrep76yhQ6XR6zJJP35Ve7xhO6kRoHXVGs8/WimKl5pn0T6zVgLgTfWC4g274H0U7W2KYHcu5S1TTX0XRW/DEtQMWTY5vLLmVqtR3bisweol8qIcH7ILVZezVDIwZGOJ3oc8x3HMziGwFnX5NgHra6sXecbYjlh93a2N4IQ19MiR51CNIaNoZGmzDIRrxttAEt2pMGI1KT5Ie9EdlCOzcnqRRIIplwItpL3oHqyWgYY8JZMiCOqbwVbcZ98rz1cME3aJdmqTwZb9QYUQIHnBd5j03qJkWq05ZszTsPzfez8oyi75KSVj1ieDrQmTQ0GnUuZJGU+C3dw9bq7XzdGd74NPP5doWgatQ33pNu9M1w5sl1CjYXBwgKVjU+0Zmmb0VBPrWE2uw2nWQ8J12tDXmE8cMBFbV1jL+PsId9BjrwKAhtnByWF0FzmHiJHBdv8JWXgaYZsO0hRU397nBnBLilBF6wVLMlyzvmi9GeEDXTyaI5Sy8JZbSxVoxrCcwW/5JnRSSqZGGbytNmrrgSoUME2jhzR9DjQLud/LPu2q6bUSVFw6hZaIgYq3/RIVb6D2o+AmCCkZrLdoMaEE4UfxGvWGZu+RB38i8fqDnfNunUomPYV6sTMTPlbcBMBG9MCs0ZP5wohqe80pXDyTFcpiAKBm3KBBAfZ1E2wtSO4J6IVqZmY9FDuhqusmWG+Pp9Pm/AEtnd/yBmp0tn/g0+Go16IfH/T7kqKJP9wgpg6MEsbB/AqwlcMS6AOpdDIwpKtOLfBmlHm6ntE2zGSYVRJWxtPBFuAskr364sH/4V3IslOP/J8qA5warIa2s/xcjufvtxlOD4zq7sOYkMC3UAp3KSUKzI+gIAbx4vnKfCjg40GtZVHFJZ6GduW/OUgRVNFeZKD20uncWU+At3WWRUPa7NLh28KY7XAC+kY0keNNNp07gVRhjXWKoEMGfeF+WdvRWILDEiVFb7q9szFae/rqwEWhnMgiRXwzxWQ5bnHRrNxr7FmSbuyA0ko+9wgT8nH73JUzYUJkgMsPb7zop1QOxLunB10KAelIgCvuACONIfiUvh9FKWMKuvvnhlwSC2LuTa67v2emUH9ShuxhqoMF6LPnnlPupdHvOwHk+TPMYm5bz3td01SMCMwaZDEmYQWMeNZtznh22xfe5ztsszHU5Ls3S6IguYt0TP1tuHrJWnsLVhghlN67RxwaYPKEa08thUCIzMeAjU60i+R9JgoRL7jmZIG9iDrn5dLhWZix3rh5kpuvGZN8oMHzSSfU79ErcLdmbFe0LtcsTojcc8WQZlPVSj75jFmowJDqos6IfHU4YsgUv/l+jzCWHUqxF8kUxfmvswhUztBp/wJcV/TiAVn3N39YZmbx+GuAYcSxAeQ7tM3KhIZpGeB+3Vex+l1+PEWjbH/rKaBdmfmyI+rdqBtp+tQjyw9xKnlh8is02rm6ofhtajO60oLFkKRoLI6fTxXuCx7pIwKqUDVpysYnDHnhAvXsUJXbXBSaiG7jWYUPZjEhwWGX4wITawiSSr3IscFMoqTUVEDksMtRZ9vf2Fdzqs0C0sXRxstKn0xADD7AnNkhfTYFDk0YDNIY/iJPfB1S9ObHbs9jRxiq+X63svpdTDyFe5sRYFpmJvAl5+8mtCiM5KhTypCTSPRIvYxbFAv03Loa/MhhqBwJxaKCwpMgyRfACWttohB4JmX8kV/2zmXYmpAsOuhL0TUMw3yDRBliDsNpJ4NaIUOPtkLLSS6WZMibwz1+ZFbMkElm9qS4bnshOdREYsil/shMgOGY5vB0GR27VNOAfIYKaZdCnNqmn7FlW4Ahk8R7OQGUBRoAI84HJAGI6nL2pi/yBZHHcEQcR+S+QiUH1KfRORY/EgmxWt6pr36dGUEBRBh6TMJWgjalCpDntZHqFDcf11IC9+ywIJ4Cj2GL9vLw/KpnEQt53rRkYfBT1IqdwqknwnBJdiHJEEQaH/KePiXSWi7IIdlmLkNfSJE9izGZQ15sG5Mx9Mq4VooYQ5sk8rTCZp7yUMgK4alJzyH1qVUJmyXIkJlqGZG+Q78fR03S4kaZTQqiDIfmM99PFKQ+ylXV1KgYJRaSKMMlUWRIQlZxL/R0qgzaffHPLMpwQsrnuoR9OlRN8npp2H4NcX0nytAndlMGQ1+sis/03FjCZlmUIS2gy2BI43euRza+kGUqvo1HlOF4LZNh6/wrBHyPbM6kNkVL78IMI6kMyVYZYPFSQX6fSW0KZsVEGdpyGX5aQiVS6n2Lr1Nhho5UhlTM+RnLmNnaJNry9TfmUCGpIMBviGS2DQFTzDL/DTlkMkj8ZRquaLZQW4mYDIU6THyGH3IZxsSrgStusmvJdBcYQhQFGYZSLf7XUS3EaeJ3IXgnpkHUSAQGI8iQ7meRw5C69kUdtOGFyWprRnGdQZBhQGILSfvHaSYDtPmpoCnbyA6LG+4FGVKTDOQ0uXm0fbtTUMRL77bonAtU6kGMIVW5a0llUqpNjTN/WpRDiqJmzblDEmPIZDEq7INIISRHNgFcUKf33BRFYK7zT1G0d2LZRBp8qjJSwt+4ks6WwsYWe3PXcW8m8zhr4u2lYwllhFszkiuS1q7QCui5SWaRNvOcuxoTNC1ncLcp3R7NE51pzOdnhInH25HWGuXRNnwtKvqx4t5vz7vJYwdF7n46im+YzBZnVU8fyMpjaJNmHWmKpvW1aZJIFi40c8o+41R2AFVkIkPTVBOpD1vyeAxpwwsvofkqqO97m8Ti10zb9wfT/rD8smjtrBobjyHdDSFPDFvpNm6B94Tnclud1ST3UUx+pCuzqZ1pMwBQIF+o7LCZTSZrbjtO/thnJMelFRjjF0FfJFioDBd68ZER3/xMuMsfOuP389ogKoDH9IoIZu7jk5p/0v4vIIIL3ppgXN0SueanEDD2ORF7lxK7bcTdfX/zBw5c4fKos6GdK+HBgUNbdtFG9I/CwUrHmTfptIGq4w/ONuhvfFJptiS17lHEzGx0SzTvxLstwBhp8H+eX/dA9ExsrY7LQt2orIkUwkT+HS1Duv0OoDKhqDL+nC220QoYqqoa8JI4m/lS6Nh2tvuyhlMI2C2URtnz9hTPDv3RZDqdxOHYFlT7Nk0awGp7c3MwZRxOdKxhx/yQTqHQoTivg41vLWmxGsGI9okB+Zv0vqEk7FZf2UfksJvf65DCb4xY6ybVEW6xR8a0If8ggCqxo3Zf6tGJra9GIUYkatq3/gU2DyN1H3LIZtAldbFnwjuzpxrK2/zIZpeBUeuh8+FFq4Hi+MrE0M+cs/kKYsgeYIKHMhZQqgTSO9d9wcU0FRPpbvX+osISFC1GVollKplmVX5gsnJiE5JlvPzKkKZoqNXuZhmnbn5Ap0ofLopZiiJEZQ7bKUJ4ZTM8au1C+D/2KVkE1rYyWYlTh81rEs/tL8Aundju4Youu5umjgR98pybahCkE9ugU8Uha/YhdTMJ4J0BIB+jS/oIMk17+Q7RkZNKsj5zFFOl8O/ungLotSutvKFmpJ83q2qoz2J8vCukAWu1f1qrfkbpSgCQHZ2JQBncH6ULsTV4ygGIN3r6bEEoZZdTeYwu9xesAtM4jcr6qvER39272is6ZLM2hO7jeayq6exK3LJtTzfq/cWHZvR3bsxVlpfHYqGGjdMuFJlJzx9E+sO9udbpj9xB+oPwnHWVbA93nUHBXeJKvHe6D2ugDfuDt9/OeYec64A1s9NPFrPPMOMeBC+czI5W33o81BxYyd9ZoQT2oJ1zpTNElrpab93hLJhOJqPRaDKZBrvDJlqp2UfSG4jfZfQ2+C7MLYgCqKkmxhZSNagZyMIYGTlFN2A6f+KK3EzER1Rc9OX/ACAoJSlSGeKT9ag2xAEQXrz5ctxi+MOPjAuohQBN4+/z+0K4vIKMhqFCfjiZ/0ENmg1vNIzUUiQBUqPdW+6LfRre5/zSv7+eOYcdNLvm4vNP65dsKP7OvXRvZiGfJgAa0vUo80z6fwOK7c8O18TqfBtCQBoybv+7GUik48v1EAg5r38aXuh/Dhanc5R8XQxkml+die0kurrzZfzvs2Og2KHvxz/w/VB+40iDBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEGDBg0aEPwH5Bv4OLPCt3sAAAAASUVORK5CYII="
                  alt="123"
                  className="w-32 rounded-full h-32 object-center object-cover group-hover:opacity-75 shadow-img border-gray"
                />
                <div className="flex flex-col items-center">
                  <h1 className="mb-1 px-2 text-lg content-center py-2">
                    Lyric
                  </h1>

                  <p className="mb-1 p-1 px-3 text-md autolayout text-white font-medium pr-2 content-center bg-yellow-600 rounded-full">
                    <TagFilled /> 20% OFF
                  </p>
                </div>
                <button className="w-full h-12 p-2 mx-2 my-2 bg-glimpse text-white">
                  View Coupon Code
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
