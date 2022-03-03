import React from "react";
import styled from "styled-components";
import IconProps from "../types/IconProps"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;


const CountryIcon = (props: IconProps) => {
  let color = "black";
  if (props.genre === props.selectedGenre) {
    color = "#5943B1";
  }
  return (
    <Root>
      <svg
        width="100"
        height="99"
        viewBox="0 0 100 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88.4771 50.4752C88.3446 50.4752 88.2134 50.449 88.0911 50.3982C87.9688 50.3474 87.8577 50.2729 87.7641 50.1791L81.6419 44.0488C81.5481 43.9553 81.4737 43.8442 81.423 43.7218C81.3722 43.5995 81.3461 43.4684 81.3461 43.3359C81.3461 43.2035 81.3722 43.0723 81.423 42.95C81.4737 42.8277 81.5481 42.7165 81.6419 42.623L87.7641 36.5008C87.8577 36.407 87.9688 36.3326 88.0911 36.2818C88.2135 36.2311 88.3446 36.2049 88.4771 36.2049C88.6095 36.2049 88.7407 36.2311 88.863 36.2818C88.9853 36.3326 89.0964 36.407 89.19 36.5008L95.3122 42.623C95.406 42.7165 95.4804 42.8277 95.5312 42.95C95.5819 43.0723 95.6081 43.2035 95.6081 43.3359C95.6081 43.4684 95.5819 43.5995 95.5312 43.7218C95.4804 43.8442 95.406 43.9553 95.3122 44.0488L89.1819 50.1791C88.995 50.3666 88.7418 50.473 88.4771 50.4752ZM83.7786 43.344L88.4771 48.0424L93.1755 43.344L88.4771 38.6456L83.7786 43.344Z"
          fill={color}
        />
        <path
          d="M58.6715 17.6487C58.4067 17.6465 58.1535 17.5401 57.9666 17.3526L51.8363 11.2223C51.7425 11.1288 51.6681 11.0177 51.6174 10.8953C51.5666 10.773 51.5405 10.6419 51.5405 10.5094C51.5405 10.377 51.5666 10.2458 51.6174 10.1235C51.6681 10.0012 51.7425 9.89004 51.8363 9.7965L57.9666 3.68231C58.0601 3.58854 58.1712 3.51414 58.2936 3.46338C58.4159 3.41261 58.5471 3.38648 58.6795 3.38648C58.812 3.38648 58.9431 3.41261 59.0654 3.46338C59.1878 3.51414 59.2989 3.58854 59.3924 3.68231L65.5066 9.81261C65.6004 9.90615 65.6748 10.0173 65.7256 10.1396C65.7763 10.2619 65.8024 10.3931 65.8024 10.5255C65.8024 10.658 65.7763 10.7891 65.7256 10.9115C65.6748 11.0338 65.6004 11.1449 65.5066 11.2384L59.3763 17.3526C59.1894 17.5401 58.9362 17.6465 58.6715 17.6487ZM53.973 10.5175L58.6715 15.2159L63.3699 10.5175L58.6715 5.81905L53.973 10.5175Z"
          fill={color}
        />
        <path
          d="M8.12269 45.4404C7.85795 45.4383 7.60473 45.3319 7.41783 45.1444L1.28753 39.0141C1.19375 38.9206 1.11936 38.8094 1.06859 38.6871C1.01783 38.5648 0.991699 38.4336 0.991699 38.3012C0.991699 38.1687 1.01783 38.0376 1.06859 37.9152C1.11936 37.7929 1.19375 37.6818 1.28753 37.5883L7.41783 31.4741C7.51136 31.3803 7.62248 31.3059 7.74482 31.2551C7.86715 31.2044 7.9983 31.1782 8.13075 31.1782C8.26319 31.1782 8.39434 31.2044 8.51668 31.2551C8.63901 31.3059 8.75013 31.3803 8.84367 31.4741L14.9579 37.6044C15.0516 37.6979 15.126 37.809 15.1768 37.9314C15.2276 38.0537 15.2537 38.1848 15.2537 38.3173C15.2537 38.4497 15.2276 38.5809 15.1768 38.7032C15.126 38.8255 15.0516 38.9367 14.9579 39.0302L8.82755 45.1444C8.64065 45.3319 8.38743 45.4383 8.12269 45.4404ZM3.42427 38.3092L8.12269 43.0076L12.8211 38.3092L8.12269 33.6108L3.42427 38.3092Z"
          fill={color}
        />
        <path
          d="M88.5435 3.68031C88.4112 3.68054 88.2801 3.6547 88.1578 3.60425C88.0355 3.55379 87.9243 3.47973 87.8306 3.38628L86.6223 2.17794C86.5259 2.08532 86.4489 1.97442 86.3958 1.85173C86.3427 1.72904 86.3146 1.597 86.3131 1.46332C86.3115 1.32964 86.3366 1.197 86.3869 1.07313C86.4372 0.949256 86.5116 0.836636 86.6059 0.741838C86.7002 0.64704 86.8124 0.571961 86.9359 0.520981C87.0595 0.470002 87.192 0.444141 87.3257 0.44491C87.4594 0.445678 87.5916 0.473058 87.7146 0.525455C87.8376 0.577851 87.9489 0.654214 88.0421 0.750089L89.2504 1.95843C89.3908 2.09924 89.4863 2.27846 89.525 2.4735C89.5637 2.66853 89.5437 2.87065 89.4677 3.05437C89.3917 3.2381 89.263 3.3952 89.0978 3.50587C88.9326 3.61655 88.7383 3.67584 88.5395 3.67628L88.5435 3.68031Z"
          fill={color}
        />
        <path
          d="M33.4675 99C26.9667 99 20.4195 95.7496 14.0053 89.3333L9.66732 84.9954C3.2007 78.5308 -0.051739 71.9312 0.000622254 65.38C0.0610391 57.5439 4.89237 52.0218 6.96669 50.012C10.2735 46.8079 16.6636 43.1325 24.689 42.4337C31.651 41.8295 33.9932 37.8138 35.6446 34.1002C37.157 30.6947 39.769 28.1672 41.6863 26.6488L41.8554 26.5279C46.0584 23.3057 51.5221 22.921 56.8368 25.4686C59.0118 26.5098 61.0418 27.9679 63.2249 30.0603C63.3258 30.1503 63.4075 30.2597 63.4653 30.382C63.523 30.5043 63.5555 30.6369 63.5608 30.772C63.5661 30.9071 63.5442 31.0419 63.4963 31.1684C63.4485 31.2948 63.3756 31.4103 63.2821 31.508C63.1886 31.6057 63.0764 31.6836 62.9522 31.7369C62.8279 31.7903 62.6942 31.8181 62.559 31.8187C62.4238 31.8193 62.2899 31.7927 62.1652 31.7404C62.0405 31.6881 61.9276 31.6112 61.8333 31.5143C59.8073 29.575 57.9424 28.2317 55.9648 27.2852C51.357 25.0699 46.6606 25.384 43.0758 28.129L42.9349 28.2377C41.1888 29.6193 38.8225 31.901 37.4772 34.9299C35.4633 39.4793 32.5271 43.791 24.8561 44.4516C17.3624 45.1061 11.4234 48.5056 8.36635 51.47C6.47328 53.3047 2.06688 58.3334 2.0125 65.4082C1.96417 71.3995 5.01925 77.5137 11.0891 83.5836L15.4271 87.9215C21.4506 93.9451 27.5104 96.9982 33.4655 96.9982H33.5984C40.6773 96.9418 45.71 92.5334 47.5447 90.6403C50.497 87.5933 53.8864 81.6664 54.541 74.1707C55.3042 65.4304 61.2351 62.7942 64.0848 61.5274C67.3654 60.0694 70.0802 57.0767 70.34 56.7867C73.1916 53.0127 73.8985 48.9527 72.4405 44.7154C71.2422 41.2334 68.9101 38.5509 67.6273 37.264C67.5314 37.1708 67.455 37.0595 67.4026 36.9365C67.3502 36.8135 67.3228 36.6813 67.3221 36.5477C67.3213 36.414 67.3472 36.2815 67.3981 36.1579C67.4491 36.0343 67.5242 35.9221 67.619 35.8278C67.7138 35.7336 67.8264 35.6591 67.9503 35.6089C68.0742 35.5586 68.2068 35.5335 68.3405 35.535C68.4742 35.5365 68.6062 35.5646 68.7289 35.6177C68.8516 35.6708 68.9625 35.7478 69.0551 35.8442C70.4648 37.2539 73.0164 40.2003 74.3456 44.0629C76.0373 48.9849 75.2237 53.6853 71.9289 58.0353L71.8866 58.0857C71.7598 58.2327 68.749 61.6644 64.9105 63.3701C61.1888 65.0115 57.161 67.3617 56.5569 74.3338C55.858 82.3531 52.1948 88.7331 49.0007 92.0299C46.9868 94.1042 41.4647 98.9376 33.6246 99H33.4675Z"
          fill={color}
        />
        <path
          d="M56.9596 48.5418C56.7602 48.5422 56.5652 48.4833 56.3993 48.3727C56.2333 48.2621 56.104 48.1047 56.0276 47.9205C55.9513 47.7363 55.9313 47.5335 55.9703 47.3379C56.0093 47.1424 56.1055 46.9628 56.2467 46.822L84.6084 18.4724L80.639 14.4989L52.2854 42.8526C52.1925 42.9488 52.0814 43.0255 51.9585 43.0782C51.8357 43.131 51.7035 43.1588 51.5698 43.16C51.4361 43.1611 51.3035 43.1356 51.1798 43.085C51.056 43.0344 50.9436 42.9596 50.8491 42.8651C50.7545 42.7705 50.6797 42.6581 50.6291 42.5343C50.5785 42.4106 50.553 42.278 50.5542 42.1443C50.5553 42.0106 50.5831 41.8785 50.6359 41.7556C50.6887 41.6328 50.7654 41.5216 50.8615 41.4288L79.918 12.3642C80.0116 12.2704 80.1227 12.196 80.245 12.1453C80.3674 12.0945 80.4985 12.0684 80.631 12.0684C80.7634 12.0684 80.8945 12.0945 81.0169 12.1453C81.1392 12.196 81.2503 12.2704 81.3439 12.3642L86.7451 17.7574C86.9339 17.9463 87.04 18.2023 87.04 18.4693C87.04 18.7363 86.9339 18.9924 86.7451 19.1812L57.6806 48.2458C57.5861 48.3406 57.4737 48.4156 57.3499 48.4664C57.2261 48.5172 57.0934 48.5429 56.9596 48.5418Z"
          fill={color}
        />
        <path
          d="M48.0985 61.181C45.7225 61.1803 43.4202 60.3558 41.5838 58.848C39.7475 57.3402 38.4907 55.2423 38.0276 52.9118C37.5646 50.5813 37.9238 48.1624 39.0442 46.0671C40.1646 43.9718 41.9769 42.3297 44.1722 41.4207C46.3675 40.5116 48.81 40.3919 51.0837 41.0818C53.3574 41.7717 55.3216 43.2285 56.6416 45.2042C57.9616 47.1798 58.5559 49.552 58.323 51.9167C58.0902 54.2813 57.0447 56.492 55.3647 58.1723V58.1723C54.4127 59.1294 53.2803 59.8881 52.033 60.4046C50.7858 60.9211 49.4485 61.185 48.0985 61.181V61.181ZM48.0985 42.6532C46.1883 42.654 44.3374 43.3171 42.8613 44.5296C41.3851 45.742 40.375 47.4288 40.0031 49.3025C39.6311 51.1762 39.9203 53.1209 40.8215 54.8052C41.7226 56.4896 43.1798 57.8094 44.9449 58.5397C46.71 59.2701 48.6738 59.3659 50.5016 58.8108C52.3294 58.2556 53.9082 57.0839 54.9689 55.4952C56.0297 53.9066 56.5068 51.9993 56.319 50.0983C56.1311 48.1973 55.29 46.4202 53.9388 45.0699C53.1743 44.2988 52.2645 43.687 51.262 43.2698C50.2596 42.8525 49.1844 42.6382 48.0985 42.6391V42.6532Z"
          fill={color}
        />
        <path
          d="M38.6694 79.5277C38.4026 79.5271 38.1469 79.4206 37.9585 79.2316L19.8838 61.167C19.7903 61.0733 19.7162 60.9622 19.6657 60.84C19.6151 60.7177 19.5891 60.5866 19.5892 60.4543C19.5893 60.322 19.6155 60.191 19.6662 60.0688C19.7169 59.9466 19.7912 59.8356 19.8848 59.7421C19.9785 59.6486 20.0896 59.5745 20.2118 59.524C20.3341 59.4734 20.4651 59.4475 20.5975 59.4475C20.7298 59.4476 20.8608 59.4738 20.983 59.5245C21.1052 59.5752 21.2162 59.6495 21.3097 59.7431L39.3824 77.8158C39.5236 77.9567 39.6197 78.1363 39.6587 78.3318C39.6977 78.5274 39.6778 78.7301 39.6014 78.9143C39.5251 79.0986 39.3957 79.256 39.2298 79.3666C39.0639 79.4772 38.8689 79.5361 38.6694 79.5357V79.5277Z"
          fill={color}
        />
        <path
          d="M85.8832 19.4793C85.6729 19.4768 85.4687 19.4085 85.2992 19.284C85.1296 19.1595 85.0034 18.985 84.9381 18.7851C84.8727 18.5852 84.8717 18.3698 84.935 18.1693C84.9983 17.9687 85.1229 17.793 85.2911 17.6668C86.2443 16.9699 87.4352 16.6802 88.602 16.8612L96.7845 8.67677C96.0667 7.31157 95.7935 5.75617 96.0031 4.22808C95.7303 3.76427 95.3426 3.37861 94.8773 3.10835C94.0999 3.2453 92.4042 3.34801 90.3783 2.28668L82.2099 10.4309C82.3115 11.015 82.2945 11.6137 82.1599 12.1911C82.0253 12.7686 81.7759 13.313 81.4265 13.7921C81.2695 14.0081 81.033 14.1529 80.7692 14.1947C80.5054 14.2364 80.2358 14.1716 80.0198 14.0146C79.8037 13.8576 79.6589 13.6211 79.6172 13.3573C79.5754 13.0935 79.6402 12.8239 79.7972 12.6079C80.018 12.306 80.1656 11.9569 80.2285 11.5882C80.2914 11.2195 80.2679 10.8413 80.1597 10.4832C80.0898 10.3015 80.0741 10.1033 80.1145 9.91282C80.1549 9.7223 80.2496 9.54758 80.3873 9.40983L89.5022 0.294939C89.6648 0.132352 89.8781 0.0303032 90.1067 0.00575628C90.3354 -0.0187907 90.5655 0.0356426 90.7589 0.160008C92.9621 1.56974 94.6356 1.09244 94.7061 1.07029C94.9295 0.997088 95.1717 1.00638 95.3888 1.09647C95.4633 1.12668 97.2134 1.85369 97.9847 3.68433C98.0739 3.8969 98.0874 4.13362 98.023 4.35495C98.0069 4.4194 97.5578 6.16746 98.891 8.29615C99.0118 8.48945 99.0634 8.718 99.0374 8.94444C99.0114 9.17088 98.9094 9.38182 98.748 9.54275L89.6351 18.6536C89.4987 18.79 89.3259 18.8844 89.1374 18.9254C88.9489 18.9665 88.7526 18.9525 88.5718 18.8852C88.2147 18.7885 87.8403 18.7746 87.477 18.8444C87.1137 18.9142 86.7711 19.0659 86.4753 19.288C86.3031 19.4127 86.0958 19.4796 85.8832 19.4793V19.4793Z"
          fill={color}
        />
        <path
          d="M82.373 9.85089C82.2407 9.85112 82.1096 9.82528 81.9873 9.77483C81.865 9.72437 81.7538 9.65031 81.6601 9.55686L80.4518 8.34852C80.3556 8.25563 80.2789 8.14452 80.2261 8.02167C80.1733 7.89882 80.1455 7.76669 80.1444 7.63298C80.1432 7.49928 80.1687 7.36669 80.2193 7.24294C80.27 7.11919 80.3447 7.00676 80.4393 6.91222C80.5338 6.81767 80.6462 6.7429 80.77 6.69227C80.8937 6.64164 81.0263 6.61616 81.16 6.61732C81.2937 6.61849 81.4259 6.64626 81.5487 6.69904C81.6716 6.75181 81.7827 6.82852 81.8756 6.9247L83.0839 8.13303C83.2243 8.27385 83.3198 8.45307 83.3585 8.64811C83.3972 8.84314 83.3772 9.04526 83.3012 9.22898C83.2252 9.4127 83.0965 9.5698 82.9313 9.68048C82.7661 9.79115 82.5718 9.85045 82.373 9.85089V9.85089Z"
          fill={color}
        />
        <path
          d="M85.4583 6.76558C85.1932 6.76447 84.9392 6.65881 84.7514 6.47156L83.5431 5.26322C83.3795 5.07137 83.2938 4.82511 83.303 4.57313C83.3122 4.32115 83.4155 4.08179 83.5927 3.90236C83.7699 3.72293 84.0079 3.61649 84.2597 3.60409C84.5116 3.59168 84.7589 3.67421 84.9528 3.83537L86.1612 5.0437C86.3015 5.18452 86.3971 5.36374 86.4357 5.55878C86.4744 5.75381 86.4545 5.95593 86.3785 6.13965C86.3024 6.32337 86.1737 6.48047 86.0085 6.59115C85.8433 6.70182 85.6491 6.76112 85.4503 6.76156L85.4583 6.76558Z"
          fill={color}
        />
        <path
          d="M97.5778 12.7167C97.3125 12.7188 97.057 12.616 96.8669 12.4307L95.6586 11.2224C95.5624 11.1295 95.4857 11.0184 95.4329 10.8955C95.3802 10.7727 95.3524 10.6405 95.3512 10.5068C95.3501 10.3731 95.3755 10.2405 95.4262 10.1168C95.4768 9.99302 95.5516 9.88059 95.6461 9.78605C95.7407 9.6915 95.8531 9.61673 95.9768 9.5661C96.1006 9.51547 96.2332 9.49 96.3669 9.49116C96.5006 9.49232 96.6327 9.5201 96.7556 9.57287C96.8784 9.62564 96.9895 9.70235 97.0824 9.79853L98.2908 11.0069C98.432 11.1477 98.5281 11.3273 98.5671 11.5228C98.6062 11.7184 98.5862 11.9212 98.5098 12.1054C98.4335 12.2896 98.3041 12.447 98.1382 12.5576C97.9723 12.6682 97.7773 12.7271 97.5778 12.7267V12.7167Z"
          fill={color}
        />
        <path
          d="M91.4073 18.8872C91.1404 18.8866 90.8848 18.7801 90.6964 18.5912L89.488 17.3828C89.3944 17.2893 89.3201 17.1783 89.2694 17.0561C89.2187 16.9339 89.1925 16.8029 89.1924 16.6706C89.1924 16.5383 89.2183 16.4073 89.2689 16.285C89.3194 16.1627 89.3935 16.0516 89.487 15.958C89.5805 15.8644 89.6915 15.7901 89.8137 15.7394C89.9359 15.6887 90.0669 15.6625 90.1992 15.6624C90.3315 15.6623 90.4626 15.6883 90.5849 15.7388C90.7071 15.7894 90.8182 15.8635 90.9119 15.957L92.1202 17.1653C92.2614 17.3062 92.3576 17.4857 92.3966 17.6813C92.4356 17.8769 92.4156 18.0796 92.3393 18.2638C92.2629 18.4481 92.1336 18.6055 91.9677 18.7161C91.8017 18.8267 91.6067 18.8856 91.4073 18.8852V18.8872Z"
          fill={color}
        />
        <path
          d="M94.4926 15.8019C94.2258 15.8013 93.9701 15.6949 93.7817 15.5059L92.5734 14.2975C92.39 14.1076 92.2885 13.8533 92.2907 13.5893C92.293 13.3252 92.3989 13.0727 92.5856 12.886C92.7723 12.6993 93.0249 12.5934 93.2889 12.5911C93.5529 12.5888 93.8073 12.6903 93.9972 12.8737L95.2055 14.0821C95.3467 14.2229 95.4429 14.4025 95.4819 14.598C95.5209 14.7936 95.501 14.9963 95.4246 15.1806C95.3483 15.3648 95.2189 15.5222 95.053 15.6328C94.8871 15.7434 94.692 15.8023 94.4926 15.8019V15.8019Z"
          fill={color}
        />
        <path
          d="M76.6777 89.9274C76.4107 89.9274 76.1546 89.8213 75.9657 89.6324C75.7769 89.4436 75.6708 89.1875 75.6708 88.9204V68.2558C75.6453 67.518 75.7828 66.7836 76.0736 66.105C76.5146 65.0557 77.5236 63.648 79.8114 62.9069C80.3309 62.7378 81.06 62.5525 81.8253 62.3551L81.8736 62.341L81.9219 62.3309L84.7212 61.759C85.0414 61.6764 86.4955 61.3562 87.5205 62.2927C88.2858 62.9875 88.5275 64.1052 88.2597 65.6116C88.1026 67.2932 87.1822 70.1489 84.687 70.5215L77.6766 72.4186V88.9204C77.6766 89.1861 77.5717 89.441 77.3846 89.6296C77.1975 89.8182 76.9434 89.9252 76.6777 89.9274ZM82.3569 64.2985H82.3327C81.5937 64.4878 80.8968 64.6671 80.4357 64.8161C77.5034 65.7646 77.6786 68.1028 77.6807 68.1269C77.6827 68.1511 77.6807 68.1874 77.6807 68.2156V70.3261L84.2278 68.5559C84.2715 68.5436 84.3159 68.5342 84.3607 68.5277C85.9396 68.3263 86.2598 65.4122 86.2619 65.382C86.2644 65.3482 86.2691 65.3145 86.276 65.2813C86.4431 64.3952 86.3303 63.9239 86.1712 63.7789C85.9698 63.5896 85.4281 63.646 85.2388 63.7004L85.1603 63.7205L82.3569 64.2985Z"
          fill={color}
        />
        <path
          d="M70.4991 95.2018C68.6866 95.2018 67.0553 94.5009 66.0061 93.2745C65.5372 92.7285 65.1939 92.0863 65.0004 91.3931C64.8069 90.6999 64.768 89.9727 64.8864 89.2628C65.3657 86.1574 68.5416 83.6239 71.9692 83.6239C73.7817 83.6239 75.411 84.3267 76.4622 85.5532C76.9306 86.099 77.2735 86.741 77.4666 87.4338C77.6598 88.1267 77.6985 88.8534 77.58 89.5629C77.0986 92.6824 73.9247 95.2018 70.4991 95.2018ZM71.9692 85.6438C69.4942 85.6438 67.2104 87.406 66.8781 89.5689C66.8001 89.9942 66.8186 90.4317 66.9322 90.8489C67.0458 91.2661 67.2517 91.6525 67.5346 91.9795C68.2012 92.7589 69.2827 93.204 70.4991 93.204C72.9722 93.204 75.2559 91.4438 75.5882 89.2789C75.6641 88.8565 75.6448 88.4225 75.5315 88.0086C75.4183 87.5947 75.214 87.2113 74.9337 86.8864C74.2651 86.0969 73.1856 85.6499 71.9692 85.6499V85.6438Z"
          fill={color}
        />
        <path
          d="M17.5295 32.0037C16.2396 32.0274 14.9875 31.5676 14.0193 30.7149C13.5353 30.2731 13.1541 29.7305 12.9025 29.1254C12.6509 28.5203 12.5351 27.8674 12.5633 27.2127C12.6539 24.3227 15.1813 21.7591 18.2968 21.3724C19.92 21.171 21.4728 21.6261 22.5542 22.615C23.0394 23.0575 23.4212 23.6014 23.6725 24.208C23.9238 24.8147 24.0384 25.4692 24.0083 26.1252V26.1252C23.9176 29.0151 21.4003 31.5788 18.2747 31.9655C18.0273 31.9931 17.7785 32.0059 17.5295 32.0037V32.0037ZM19.044 23.344C18.8757 23.3442 18.7076 23.3543 18.5405 23.3742C16.4501 23.63 14.6356 25.4163 14.5772 27.2731C14.5578 27.6381 14.6201 28.0029 14.7594 28.3408C14.8988 28.6787 15.1117 28.9813 15.3827 29.2266C16.0312 29.8167 16.9939 30.0845 18.0371 29.9576C20.1275 29.7019 21.944 27.9155 22.0004 26.0587C22.0195 25.6937 21.9571 25.3291 21.8177 24.9912C21.6784 24.6533 21.4656 24.3507 21.1948 24.1052C20.5969 23.5941 19.8303 23.3234 19.044 23.346V23.344Z"
          fill={color}
        />
        <path
          d="M36.0151 25.4848C34.7246 25.5081 33.472 25.0484 32.5029 24.1959C32.0171 23.754 31.6345 23.2106 31.3822 22.6044C31.1299 21.9981 31.014 21.3437 31.0428 20.6877C31.1314 17.7977 33.6508 15.234 36.7744 14.8474C38.3976 14.646 39.9503 15.1011 41.0318 16.0899C41.5159 16.5315 41.897 17.0741 42.1483 17.6793C42.3995 18.2845 42.5147 18.9375 42.4858 19.5921C42.3952 22.482 39.8778 25.0437 36.7522 25.4324C36.5078 25.4644 36.2617 25.4819 36.0151 25.4848ZM37.5316 16.825C37.3612 16.8271 37.1911 16.8392 37.0221 16.8613C34.9317 17.117 33.1171 18.9033 33.0587 20.7602C33.0394 21.1249 33.1017 21.4893 33.241 21.8269C33.3804 22.1645 33.5933 22.4668 33.8643 22.7116C34.5128 23.3037 35.4754 23.5716 36.5186 23.4447C38.609 23.1889 40.4256 21.4026 40.482 19.5458C40.5012 19.1808 40.4389 18.8161 40.2995 18.4782C40.1602 18.1403 39.9473 17.8377 39.6764 17.5923C39.079 17.0783 38.3114 16.8054 37.5235 16.827L37.5316 16.825Z"
          fill={color}
        />
        <path
          d="M22.8765 26.0164C22.6294 26.0182 22.3902 25.9292 22.2046 25.7662C22.0189 25.6031 21.8996 25.3775 21.8695 25.1323L19.8133 8.22766C19.7809 7.96276 19.8549 7.69582 20.0192 7.48549C20.1835 7.27516 20.4245 7.13864 20.6894 7.10592L39.7811 4.77786C39.9118 4.76053 40.0447 4.76942 40.1719 4.80399C40.2992 4.83857 40.4182 4.89815 40.5222 4.97925C40.6266 5.06054 40.7139 5.16161 40.7793 5.27668C40.8446 5.39175 40.8866 5.51857 40.9028 5.64988L42.4253 18.1038C42.4577 18.369 42.3833 18.6362 42.2186 18.8465C42.054 19.0569 41.8125 19.1932 41.5473 19.2255C41.2821 19.2579 41.0149 19.1835 40.8046 19.0188C40.5942 18.8542 40.4579 18.6127 40.4255 18.3475L39.0158 6.89446L21.9339 8.98287L23.8774 24.8927C23.9098 25.1575 23.8357 25.4245 23.6715 25.6348C23.5072 25.8452 23.2662 25.9817 23.0013 26.0144C22.9598 26.0181 22.9181 26.0187 22.8765 26.0164V26.0164Z"
          fill={color}
        />
        <path
          d="M80.8525 24.069C80.72 24.0689 80.5888 24.0428 80.4665 23.992C80.3442 23.9412 80.2331 23.8667 80.1395 23.7729L75.3324 18.9658C75.2362 18.8729 75.1595 18.7618 75.1067 18.6389C75.0539 18.5161 75.0262 18.3839 75.025 18.2502C75.0238 18.1165 75.0493 17.9839 75.1 17.8602C75.1506 17.7364 75.2253 17.624 75.3199 17.5294C75.4144 17.4349 75.5269 17.3601 75.6506 17.3095C75.7744 17.2589 75.907 17.2334 76.0407 17.2346C76.1744 17.2357 76.3065 17.2635 76.4294 17.3163C76.5522 17.369 76.6633 17.4458 76.7562 17.5419L81.5634 22.3491C81.7044 22.4898 81.8006 22.6692 81.8396 22.8646C81.8787 23.06 81.8589 23.2625 81.7828 23.4467C81.7067 23.6308 81.5777 23.7882 81.4121 23.899C81.2465 24.0098 81.0517 24.0689 80.8525 24.069Z"
          fill={color}
        />
        <path
          d="M76.2709 28.6486C76.0043 28.6485 75.7487 28.5428 75.5599 28.3546L70.7528 23.5474C70.6566 23.4545 70.5799 23.3434 70.5271 23.2205C70.4744 23.0977 70.4466 22.9656 70.4454 22.8319C70.4442 22.6982 70.4697 22.5656 70.5204 22.4418C70.571 22.3181 70.6458 22.2056 70.7403 22.1111C70.8349 22.0165 70.9473 21.9418 71.071 21.8911C71.1948 21.8405 71.3274 21.815 71.4611 21.8162C71.5948 21.8174 71.7269 21.8451 71.8498 21.8979C71.9726 21.9507 72.0837 22.0274 72.1766 22.1236L76.9838 26.9307C77.1243 27.0717 77.2199 27.2511 77.2585 27.4463C77.2971 27.6415 77.277 27.8438 77.2007 28.0276C77.1244 28.2114 76.9954 28.3685 76.8299 28.479C76.6644 28.5895 76.4699 28.6485 76.2709 28.6486Z"
          fill={color}
        />
        <path
          d="M71.6913 33.2302C71.4245 33.2296 71.1688 33.1231 70.9804 32.9342L66.1733 28.127C66.0771 28.0341 66.0004 27.923 65.9476 27.8001C65.8948 27.6773 65.867 27.5452 65.8659 27.4115C65.8647 27.2778 65.8902 27.1452 65.9408 27.0214C65.9915 26.8977 66.0662 26.7852 66.1608 26.6907C66.2553 26.5962 66.3677 26.5214 66.4915 26.4708C66.6152 26.4201 66.7478 26.3946 66.8815 26.3958C67.0152 26.397 67.1474 26.4247 67.2702 26.4775C67.3931 26.5303 67.5042 26.607 67.5971 26.7032L72.4042 31.5103C72.5454 31.6512 72.6416 31.8308 72.6806 32.0263C72.7196 32.2219 72.6997 32.4246 72.6233 32.6089C72.547 32.7931 72.4176 32.9505 72.2517 33.0611C72.0858 33.1717 71.8907 33.2306 71.6913 33.2302Z"
          fill={color}
        />
        <path
          d="M67.009 37.9125C66.7422 37.9119 66.4865 37.8054 66.2981 37.6164L61.4909 32.8093C61.3948 32.7164 61.3181 32.6053 61.2653 32.4824C61.2125 32.3596 61.1847 32.2274 61.1836 32.0937C61.1824 31.96 61.2079 31.8274 61.2585 31.7037C61.3091 31.5799 61.3839 31.4675 61.4785 31.373C61.573 31.2784 61.6854 31.2036 61.8092 31.153C61.9329 31.1024 62.0655 31.0769 62.1992 31.0781C62.3329 31.0792 62.4651 31.107 62.5879 31.1598C62.7108 31.2126 62.8219 31.2893 62.9148 31.3854L67.7219 36.1946C67.8631 36.3354 67.9593 36.515 67.9983 36.7106C68.0373 36.9062 68.0174 37.1089 67.941 37.2931C67.8646 37.4773 67.7353 37.6347 67.5694 37.7454C67.4035 37.856 67.2084 37.9148 67.009 37.9145V37.9125Z"
          fill={color}
        />
        <path
          d="M62.4294 42.4921C62.2971 42.4923 62.166 42.4665 62.0437 42.416C61.9213 42.3656 61.8102 42.2915 61.7165 42.1981L56.9093 37.3909C56.8157 37.2974 56.7414 37.1864 56.6907 37.0642C56.64 36.942 56.6138 36.811 56.6137 36.6787C56.6136 36.5464 56.6396 36.4153 56.6901 36.2931C56.7407 36.1708 56.8148 36.0597 56.9083 35.9661C57.0018 35.8724 57.1128 35.7981 57.235 35.7474C57.3572 35.6967 57.4882 35.6705 57.6205 35.6705C57.7528 35.6704 57.8838 35.6963 58.0061 35.7469C58.1284 35.7974 58.2395 35.8716 58.3331 35.965L63.1403 40.7722C63.2814 40.9129 63.3775 41.0923 63.4166 41.2877C63.4556 41.4831 63.4359 41.6857 63.3598 41.8698C63.2836 42.0539 63.1546 42.2113 62.989 42.3221C62.8234 42.4329 62.6286 42.492 62.4294 42.4921Z"
          fill={color}
        />
        <path
          d="M85.6657 11.8265C85.4671 11.8261 85.2731 11.7669 85.108 11.6565C84.9429 11.5461 84.8142 11.3893 84.738 11.2059C84.6618 11.0225 84.6416 10.8207 84.6798 10.6258C84.718 10.4309 84.813 10.2517 84.9528 10.1107L89.7338 5.32968C89.9237 5.14626 90.178 5.04476 90.442 5.04706C90.7061 5.04935 90.9586 5.15525 91.1453 5.34195C91.332 5.52864 91.4379 5.7812 91.4402 6.04522C91.4425 6.30924 91.341 6.56359 91.1576 6.75351L86.3766 11.5345C86.2834 11.6279 86.1725 11.7018 86.0505 11.7519C85.9284 11.8021 85.7976 11.8274 85.6657 11.8265V11.8265Z"
          fill={color}
        />
        <path
          d="M88.31 14.4728C88.111 14.4727 87.9164 14.4137 87.7509 14.3032C87.5854 14.1927 87.4564 14.0356 87.3801 13.8518C87.3039 13.668 87.2837 13.4657 87.3224 13.2705C87.361 13.0753 87.4565 12.8959 87.597 12.7549L92.378 7.97393C92.5679 7.79051 92.8223 7.68901 93.0863 7.69131C93.3503 7.6936 93.6029 7.7995 93.7896 7.9862C93.9763 8.17289 94.0822 8.42545 94.0845 8.68947C94.0868 8.95349 93.9853 9.20784 93.8019 9.39776L89.0209 14.1787C88.9278 14.2725 88.817 14.3468 88.695 14.3973C88.5729 14.4477 88.442 14.4734 88.31 14.4728V14.4728Z"
          fill={color}
        />
        <path
          d="M26.9526 67.8128C26.7532 67.8132 26.5581 67.7543 26.3922 67.6437C26.2263 67.5331 26.097 67.3757 26.0206 67.1915C25.9442 67.0073 25.9243 66.8045 25.9633 66.6089C26.0023 66.4134 26.0985 66.2338 26.2397 66.093L51.212 41.1207C51.3056 41.027 51.4168 40.9528 51.5391 40.9021C51.6614 40.8514 51.7925 40.8254 51.9249 40.8254C52.0573 40.8254 52.1884 40.8514 52.3107 40.9021C52.4331 40.9528 52.5442 41.027 52.6378 41.1207C52.7314 41.2143 52.8057 41.3254 52.8564 41.4477C52.9071 41.5701 52.9331 41.7012 52.9331 41.8336C52.9331 41.966 52.9071 42.0971 52.8564 42.2194C52.8057 42.3417 52.7314 42.4529 52.6378 42.5465L27.6655 67.5188C27.5718 67.6123 27.4606 67.6863 27.3383 67.7368C27.216 67.7872 27.0849 67.8131 26.9526 67.8128Z"
          fill={color}
        />
        <path
          d="M32.5915 73.0489C32.3921 73.0493 32.1971 72.9904 32.0311 72.8798C31.8652 72.7692 31.7359 72.6118 31.6595 72.4276C31.5832 72.2434 31.5632 72.0406 31.6022 71.845C31.6412 71.6495 31.7374 71.4699 31.8786 71.3291L56.8509 46.3568C56.9445 46.2631 57.0557 46.1889 57.178 46.1382C57.3003 46.0875 57.4314 46.0615 57.5638 46.0615C57.6962 46.0615 57.8273 46.0875 57.9497 46.1382C58.072 46.1889 58.1831 46.2631 58.2767 46.3568C58.3704 46.4504 58.4446 46.5615 58.4953 46.6839C58.546 46.8062 58.572 46.9373 58.572 47.0697C58.572 47.2021 58.546 47.3332 58.4953 47.4555C58.4446 47.5778 58.3704 47.689 58.2767 47.7826L33.3044 72.7549C33.2107 72.8484 33.0996 72.9224 32.9772 72.9729C32.8549 73.0233 32.7238 73.0492 32.5915 73.0489V73.0489Z"
          fill={color}
        />
        <path
          d="M29.772 70.4308C29.5726 70.4312 29.3775 70.3723 29.2116 70.2617C29.0457 70.1511 28.9164 69.9937 28.84 69.8095C28.7636 69.6253 28.7437 69.4225 28.7827 69.227C28.8217 69.0314 28.9179 68.8518 29.0591 68.711L54.0314 43.7387C54.2205 43.5496 54.4769 43.4434 54.7443 43.4434C55.0117 43.4434 55.2681 43.5496 55.4572 43.7387C55.6463 43.9278 55.7525 44.1842 55.7525 44.4516C55.7525 44.719 55.6463 44.9754 55.4572 45.1645L30.4849 70.1368C30.3912 70.2303 30.28 70.3043 30.1577 70.3548C30.0354 70.4052 29.9043 70.4311 29.772 70.4308Z"
          fill={color}
        />
      </svg>
      <div>Country</div>
    </Root>
  );
};

export default CountryIcon;