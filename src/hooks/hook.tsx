import { GoToPageType } from "@/types/type";

export const goToPage = ({ url, name }: GoToPageType) => {
  const mobileUrl = url;
  const computerUrl = url.substring(0, 8) + url.substring(10, url.length);
  if (name === "네이버") {
    if (window.innerWidth < 1100) {
      window.location.href = mobileUrl;
    } else {
      window.location.href = computerUrl;
    }
  } else {
    window.location.href = url;
  }
};
