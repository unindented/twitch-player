import { useTranslation } from "@twitch-player/i18n";
import React, { memo } from "react";
import AllCategories from "../../components/AllCategories";

const Categories = () => {
  const { t } = useTranslation();

  return <AllCategories heading={t("pages.categories.mainHeading")} />;
};

export default memo(Categories);
