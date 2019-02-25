import { useTranslation } from "@twitch-player/i18n";
import React, { memo } from "react";
import AllChannels from "../../components/AllChannels";

const Channels = () => {
  const { t } = useTranslation();

  return <AllChannels heading={t("pages.channels.mainHeading")} />;
};

export default memo(Channels);
