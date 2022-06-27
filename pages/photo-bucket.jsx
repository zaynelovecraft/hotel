import React from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase-client";
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";
import Img from "../components/Img";
import { useRouter } from "next/router";

const PhotoBucket = () => {
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const [admin, setAdmin] = useState(false);
  const [uploaded, setUploaded] = useState([]);
  const [names, setNames] = useState([]);
  const [newimg, setNewimg] = useState([]);
  const [urls, setUrls] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [message1, setMessage1] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingg, setLoadingg] = useState(false);
  const [loader, setLoader] = useState([]);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [child, setChild] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [newAlbum, setNewAlbum] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState('')
  const [savedImgs, setSavedImgs] = useState([])

  const isadmin = async () => {
    let { data, error } = await supabase.from("is_admin").select("*");

    if (data[0]?.admin === undefined) {
      router.replace("/signin");
    }
    if (data[0]?.admin === true) {
      setAdmin(true);
    }
  };

  useEffect(() => {
    isadmin();
  }, []);

  const getdetails = async () => {
    change();
    let urldata = [];
    let namdata = [];

    setLoading(true);
    setLoadingg(true);
    setUrls([])
    setNewimg([]);
    const useSaved = savedImgs.some(element => {
      if (element[selectedAlbum]) {
        setUrls(element[selectedAlbum])
        return true;
      }
    
      return false;
    });
    if (useSaved) {
      setLoading(false);
      setLoadingg(false);
      return
    } 

    loader.unshift("getting image paths from DB...");
    const { data, error } = await supabase.storage.from("avatars").list(selectedAlbum, {
      limit: 1000,
      sortBy: { column: "created_at", order: "desc" },
    });
    namdata.push(data);
    

    loader.unshift("image paths retrieved");

    loader.unshift("Downloading images...");
    let y = namdata[0].length;
    for (let i = 0; i < namdata[0].length; i++) {
      setMessage("Downloading image " + i + " of " + y + "...");
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(selectedAlbum+"/"+namdata[0][i].name);

      const url = URL.createObjectURL(data);

      let xx = {
        name: namdata[0][i].name,
        url: url,
      };

      urldata.push(xx);

      setUrls(urldata);
      
    }
    
    const isFound = savedImgs.some(element => {
      if (element[selectedAlbum]) {
        return true;
      }
    
      return false;
    });
    if (isFound) {
      
    } else {
      savedImgs.push({
        [selectedAlbum]: urldata
      })
    }


    

    loader.unshift("Downloading image " + y + " of " + y + "...");
    loader.unshift("Images loaded");
    setLoading(false);
    setLoadingg(false);
    setLoader([]);
    setMessage("");
  };

  useEffect(() => {
    if(selectedAlbum!==''){
      getdetails()
    }
  }, [selectedAlbum]);
  useEffect(() => {
    const getAlbums = async () => {
      const { data, error } = await supabase.from("Albums").select();
      setAlbums(data);
    };
    getAlbums();
  }, [modal1]);

  const imgtoupload = (event) => {
    change()
    setShow(false);
    setSelected([]);
    let names = [];
    setUploaded(event.target.files);

    for (let i = 0; i < event.target.files.length; i++) {
      names.push(event.target.files[i].name);
    }
    setNames(names);
  };

  const upload = async () => {
    setNames([]);
    setLoading(true);
    loader.unshift("Uploading images to database...");
    let namdata = [];
    let urldata = [];
    try {
      setUploading(true);
      loader.unshift("Do not refresh page!");
      for (let i = 0; i < uploaded.length; i++) {
        const file = uploaded[i];
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${selectedAlbum}/${fileName}`;

        let { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, file);

        setMessage1(
          "Uploading image " + (i + 1) + " of " + uploaded.length + "..."
        );
      }
      loader.unshift(
        "Uploading image " + uploaded.length + " of " + uploaded.length + "..."
      );
      loader.unshift("Uploaded " + uploaded.length + " images to database");
      setMessage1("");

      loader.unshift("Downloading uploaded images from the Db...");
      // test
      let y = uploaded.length;
      const { data, error } = await supabase.storage.from("avatars").list(selectedAlbum, {
        limit: y,
        sortBy: { column: "created_at", order: "desc" },
      });
      // console.log(data);
      namdata.push(data);
      // console.log(namdata);
      loader.unshift("images downloaded successfully");
      let x = namdata[0].length;
      for (let i = 0; i < namdata[0].length; i++) {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(selectedAlbum+"/"+namdata[0][i].name);
        setMessage1(`loading image ${i+1} of ${x}...`);

        const url = URL.createObjectURL(data);

        let xx = {
          name: namdata[0][i].name,
          url: url,
        };

        urldata.push(xx);
        
      }
      savedImgs.some(element => {
        if (element[selectedAlbum]) {
          for(let i=0; i<urldata.length;i++){
            element[selectedAlbum].unshift(urldata[i])
          }
         }});
      // let xx = {
      //   name: namdata[0][i].name,
      //   url: url,
      // };

      // urldata.push(xx);

      // setUrls(urldata);

      // only set new image if urls is empty

      // urls.push.apply(urls, urldata);

         if(urls.length === 0){

           newimg.unshift.apply(newimg, urldata);
         }
      

      // test
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
      if (message === "") {
        setLoading(false);
        setLoader([]);
      }
      setUploaded([]);
      setMessage1("");
      setLoadingg(false);

      // setLoading(false);
    }
  };

  const imgtodel = async (url) => {
    if(loading === true) return
    if (selected.includes(url.name) === false) {
      selected.push(url.name);
    } else {
      if (selected.includes(url.name) === true) {
        selected.splice(selected.indexOf(url.name), 1);
      }
    }

    if (selected.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const change = () => {
    setChild(!child);
  };

  return (
    <div>
      {show === true && (
        <div
          onClick={async () => {
            setShow(false);
            const picstodelete = new Set(selected);
            const picstodeletee = new Set(selected);
            const newarrr = newimg.filter((url) => {
              return !picstodeletee.has(url.name);
            });
            const newarr = urls.filter((url) => {
              return !picstodelete.has(url.name);
            });

            setUrls(newarr);
            setNewimg(newarrr);
            
            let newArr = selected.map(el => selectedAlbum + "/" + el);
//          
            // get arr to delete imgs from
            const newArrayy = savedImgs.filter((name, index) => {
              return name[selectedAlbum]
            });


            // remove imgs from array
            const xxx = newArrayy[0][selectedAlbum].filter(obj => !picstodelete.has(obj.name));
            // remove 
            const ttt = savedImgs.filter(obj => {

              if(obj[selectedAlbum] === undefined) return obj
            })

            let nnn = {
              [selectedAlbum]: xxx
            }
            ttt.push(nnn)

            setSavedImgs(ttt)

            
          
// 
            const { data, error } = await supabase.storage
              .from("avatars")
              .remove(newArr);



            change();
          }}
          className="h-[30px] flex justify-center cursor-pointer hover:bg-red-400 items-center w-[100px] rounded-lg z-50 fixed bg-red-500 bottom-2 right-2"
        >
          <h1 className="font-light text-black">Delete</h1>
        </div>
      )}

      <div className="bg-black  min-h-screen bg-opacity-90">
        <div
          className={`bg-black bg-opacity-50 justify-center items-center ${
            modal1 ? "flex" : "hidden"
          }  fixed inset-0 z-20 `}
        >
          <div className="bg-black max-w-sm w-[384px] py-2 px-3 border border-gray-700 text-white rounded shadow-xl">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold">Select or Create Album.</h4>
              <h4
                onClick={() => {
                  setModal1(false);
                  setNewAlbum('')
                }}
                className="text-lg cursor-pointer font-bold"
              >
                X{" "}
              </h4>
            </div>
            <div className="mt-2 text-center max-h-[250px] overflow-scroll text-sm">
              {albums.map((album, index) => (
                <p key={index} onClick={()=>{
                  setSelectedAlbum(album.album)
                  setModal1(false)
                }} className="text-[20px] break-words px-2 border hover:bg-gray-800 border-gray-700 py-2 cursor-pointer mb-2">{album.album}</p>
              ))}
            </div>
            <div className="mt-3 flex justify-end space-x-3">
              <input
                onChange={(e) => setNewAlbum(e.target.value)}
                style={{
                  border: "none",
                  webkitAppearance: "none",
                  mozAppearance: "none",
                  appearance: "none",
                  msAppearance: "none",
                }}
                value={newAlbum}
                type="text"
                placeholder="Enter Album"
                className="flex-grow w-full pl-2 py-1 pr-2 placeholder-gray-500 text-black outline-none rounded"
              ></input>
              <button
                onClick={() => {
                  setModal1(false);
                  setNewAlbum('')
                }}
                className="px-3 py-1 rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={ async () => {
                  const { data, error } = await supabase
                  .from('Albums')
                    .insert([
                    { album: newAlbum }
                    ])
                    setSelectedAlbum(newAlbum)
                    setModal1(false)
                    setNewAlbum('')
                }}
                className="px-3 py-1 bg-green-400 hover:bg-cyan-400 text-black rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black border-b rounded-b-lg border-gray-700 flex flex-col w-full">
          <h1 className="text-white text-3xl mb-3 font-thin text-center mt-16 lg:mt-28">
            Upload Images{" "}
          </h1>
          <div className="flex flex-col mb-3">
            <h1
              
              onClick={() => {
                if(loading===true) return
                setModal1(true);
                change()
                setShow(false);
                setSelected([]);
              }}
              className="text-white text-[15px] cursor-pointer rounded-lg font-thin py-1 px-4 border-gray-700 hover:bg-gray-800 border m-auto"
            >
              Choose Album
            </h1>
          </div>
          <div className="flex mb-2 items-center">
          {selectedAlbum === "" ?(<div></div>):(

            <label
              onClick={()=>{
                change()
                setShow(false);
                setSelected([]);
              }}
              className={` flex items-center ${
                uploading
                  ? "bg-green-400 animate-pulse text-black"
                  : "text-white"
              } border ml-5 cursor-pointer font-thin  hover:bg-gray-800 border-gray-700 text-center px-4 text-[20px] justify-center rounded-lg py-1`}
              htmlFor="single"
            >
              
              {uploading ? "Uploading ..." : "Browse"}{" "}
              {!uploading && (
                <AiFillFolderOpen className="ml-2 text-green-400" />
              )}
            </label>
)}
            <input
              className="hidden"
              type="file"
              id="single"
              accept="image/*"
              onChange={imgtoupload}
              disabled={uploading || loading}
              multiple
            />
            {uploaded?.length > 0 && (
              <h1 className="text-white ml-4 text-[20px]">
                {uploaded?.length} {uploaded?.length < 2 ? "Image" : "Images"}{" "}
                Selected{" "}
              </h1>
            )}
          </div>
          {uploaded?.length > 0 && (
          <div className="text-white flex flex-wrap ml-5 mb-5">
            {names?.map((file, index) => (
              <div key={index}>
                <h1 className="text-gray-600 mr-4 text-[20px]">{file}</h1>
              </div>
            ))}
          </div>
          )}
          {names?.length > 0 && (
            <div className="flex justify-center mb-5">
              <button
                onClick={() => {
                  setUploaded([]);
                  setNames([]);
                }}
                className="text-white mr-2 text-[15px] border border-gray-700 rounded-lg px-4 py-1 hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={upload}
                className="text-white text-[15px] border border-gray-700 rounded-lg px-4 py-1 hover:bg-green-400 hover:text-black"
              >
                Upload
              </button>
            </div>
          )}

          {loading && (
            <div className="flex flex-col-reverse text-white ml-5 mb-2 overflow-y-scroll h-[80px]">
              <h1 className="text-green-400 animate-pulse text-[12px] font-thin">
                {message1}
              </h1>
              <h1 className="text-white text-[12px] font-thin">{message}</h1>
              {loader.map((msg, index) => (
                <div key={index}>
                  <h1 className="text-white text-[12px] font-thin ">{msg}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="">
          <h1 className="text-white mx-2 break-words text-center font-thin text-[20px]">
          {selectedAlbum !== '' ? selectedAlbum : ''}
          </h1>
          {loadingg && (
            <h1 className="animate-pulse text-center text-green-400">
              Loading All Images...
            </h1>
          )}
        </div>
        <div className="flex justify-center flex-wrap">
          {newimg.map((url, index) => {
            return (
              <div
                onClick={() => {
                  imgtodel(url);
                }}
                key={index}
              >
                <Img loading={loading} child={child} show={show} url={url} />
              </div>
            );
          })}
          {urls.map((url, index) => {
            return (
              <div
                onClick={() => {
                  imgtodel(url);
                }}
                key={index}
              >
                <Img loading={loading} child={child} show={show} url={url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoBucket;
