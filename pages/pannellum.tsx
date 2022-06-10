import type { NextPage } from "next";
import { useEffect } from "react";
import ReactPannellum, { addScene, getConfig, getAllScenes, loadScene, removeHotSpot } from "react-pannellum";
import styled from "styled-components";
const Home: NextPage = () => {
  const click = () => {
    console.log(getConfig());
  };

  const Func = (elm: HTMLElement, obj: any) => {
    elm.innerHTML = obj.text;
  };

  const config = {
    autoRotate: -2,
    autoLoad: true,
    hotSpots: [{ id: "holy", pitch: 0.4, yaw: -80, cssClass: "te", createTooltipFunc: Func, createTooltipArgs: { text: "khey" } }],
  };

  const config2 = {
    autoRotate: -2,
    autoLoad: true,
    imageSource: "/images/KakaoTalk_20220427_150702407.jpg",
    // hotSpots: [{ id: 2, pitch: 0.4, yaw: -82, cssClass: "te", createTooltipFunc: Func, createTooltipArgs: { text: "khe22y" } }],
  };

  useEffect(() => {
    setTimeout(() => {
      addScene("cie", config2);
      removeHotSpot("holy", "firstScene");
      loadScene("cie", 100, 100, 100, false);
    }, 3000);
  });

  return (
    <>
      <ReactPannellum id="1" sceneId="firstScene" imageSource="/images/KakaoTalk_20220427_150702407_04.jpg" config={config} />
      <div onClick={click}>Click me</div>
    </>
  );
};

export default Home;
