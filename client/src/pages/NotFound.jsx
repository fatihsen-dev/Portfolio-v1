import { Player } from "@lottiefiles/react-lottie-player";
import { useSelector } from "react-redux";
import { findAllByDisplayValue } from "@testing-library/react";
import { Helmet } from "react-helmet";

export function NotFound() {
  const { darkStatus } = useSelector((state) => state.site);
  return (
    <div className="h-full">
      <Helmet>
        <title>404 - Fatih Şen</title>
      </Helmet>
      <div className="container mx-auto flex justify-center items-center h-full">
        {darkStatus == "true" ? (
          <Player
            autoplay
            loop
            src="https://lottie.host/25cdb6ac-67e5-46e6-b816-efd83cd60fc7/7mvtLBOZR1.json"
            style={{ height: "250px", width: "400px" }}
          ></Player>
        ) : (
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_4owMZE.json"
            style={{ height: "250px", width: "400px" }}
          ></Player>
        )}
      </div>
    </div>
  );
}
