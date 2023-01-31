import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import "./Style/reset.scss";
import Loading from "./component/Loading";
import axios from "axios";

function App() {
  const [data, setData] = useState<string>();
  const [data2, setData2] = useState<string>();
  const [data3, setData3] = useState<string>();
  const [data4, setData4] = useState<string>();
  const [data5, setData5] = useState<string>();
  const [data6, setData6] = useState<string>();
  const [refresh, setRefresh] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);

  const apiKey = process.env.REACT_APP_apiKey;
  const API = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

  useEffect(() => {
    axios.get(API).then((res) => {
      setData(res.data.data.images.original.url);
    });
    axios.get(API).then((res) => {
      setData2(res.data.data.images.original.url);
    });
    axios.get(API).then((res) => {
      setData3(res.data.data.images.original.url);
    });
    axios.get(API).then((res) => {
      setData4(res.data.data.images.original.url);
    });
    axios.get(API).then((res) => {
      setData5(res.data.data.images.original.url);
    });
    axios.get(API).then((res) => {
      setData6(res.data.data.images.original.url);
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [refresh]);

  const NewBtn = () => {
    setRefresh(!refresh);
    setLoading(true);
  };

  return (
    <div className="container">
      <section className="mainWrap">
        <div>
          <header className="header">
            <div className="logoHead">
              <img className="infiniteLogo" alt="" src="./img/infinite.png" />
              <div>random GIF</div>
            </div>

            <button className="refresh" onClick={NewBtn}>
              New!
            </button>

            <div className="rightMenu">Thank You!</div>
          </header>
        </div>
        {loading ? (
          <div className="LoadingWrap">
            <Loading />
          </div>
        ) : (
          <div className="gifWrap">
            <img className="gif" alt="gif" src={data} />
            <img className="gif" alt="gif" src={data2} />
            <img className="gif" alt="gif" src={data3} />
            <img className="gif" alt="gif" src={data4} />
            <img className="gif" alt="gif" src={data5} />
            <img className="gif" alt="gif" src={data6} />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
