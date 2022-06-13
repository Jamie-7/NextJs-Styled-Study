import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ReactPannellum, {
  addScene,
  getConfig,
  isLoaded,
  getAllScenes,
  loadScene,
  getPitch,
  getYaw,
  getHfov,
  removeHotSpot,
  getCurrentScene,
} from "react-pannellum";
import styled from "styled-components";
import ReactDOMServer from "react-dom/server";

const Home: NextPage = () => {
  const click = async (e: Event) => {
    const element: HTMLElement = e.target as HTMLElement;
    loadScene(element.dataset["scene_id"], getPitch(), getYaw(), getHfov(), true);
  };

  const Func = (elm: HTMLElement, obj: any) => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <HotspotStyled id={obj.sceneId + "-hotspot"} data-scene_id={obj.sceneId}>
        {obj.text}-BB
      </HotspotStyled>
    );
    elm.innerHTML = html;
    const sceneHotspot = document.getElementById(obj.sceneId + "-hotspot")!;
    sceneHotspot.onclick = click;
  };

  const Data: {
    autoRotate: number;
    autoLoad: boolean;
    sceneId: string;
    yaw?: number;
    pitch?: number;
    imageSource: string;
    hotSpots: {
      id: string;
      pitch: number;
      yaw: number;
      cssClass: string;
      createTooltipFunc: (elm: HTMLElement, obj: any) => void;
      createTooltipArgs: { sceneId: string; text: string };
    }[];
  }[] = [
    {
      autoRotate: -2,
      autoLoad: true,
      sceneId: "firstScene",
      yaw: 0,
      pitch: 0,
      imageSource: "/images/KakaoTalk_20220427_150702407_04.jpg",
      hotSpots: [{ id: "ee", pitch: 0.4, yaw: -22, cssClass: "te", createTooltipFunc: Func, createTooltipArgs: { sceneId: "cie", text: "khe22y" } }],
    },
    {
      autoRotate: -2,
      autoLoad: true,
      sceneId: "cie",
      imageSource: "/images/KakaoTalk_20220427_150702407.jpg",
      hotSpots: [{ id: "holy", pitch: 0.4, yaw: -80, cssClass: "te", createTooltipFunc: Func, createTooltipArgs: { sceneId: "firstScene", text: "khey" } }],
    },
  ];

  useEffect(() => {
    const RetryAdd = setInterval(() => {
      if (isLoaded() === true) {
        Data.forEach((item, index) => {
          if (index > 0) {
            const sceneId = item.sceneId;
            addScene(sceneId, item);
          }
        });
        clearInterval(RetryAdd);
      }
    }, 100);
  }, []);

  return (
    <PannellumStyled>
      <ReactPannellum id="1" sceneId={Data[0].sceneId} imageSource={Data[0].imageSource} config={Data[0]} style={{ width: "100vw", height: "100vh" }} />
    </PannellumStyled>
  );
};

const PannellumStyled = styled.div`
  width: 100vw;
  height: 100vh;

  .pnlm-load-box {
    width: 100%;
    height: 100%;
    position: absolute;
    background: gray;
    top: 0;
    left: 0;
    margin: 0;
    p {
      font-size: 30px;
    }
  }
`;

const HotspotStyled = styled.div`
  width: 100px;
  height: 100px;
  background: skyblue;
`;

export default Home;
