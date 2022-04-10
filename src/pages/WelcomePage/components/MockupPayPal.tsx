import React from "react";

const MockupPayPal = () => {
  return (
    <section className="mockup-section center-mockup">
      <div className="mockup-info">
        <div className="blobs">
          <div className="blob">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="none"
            >
              <path
                opacity="1"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#000"
              >
                <animate
                  attributeName="d"
                  repeatCount="indefinite"
                  values="M46.6082 2.31076C57.2676 -1.35097 69.9203 -0.913746 79.327 5.45168C88.8886 11.922 94.4841 23.8423 95.8203 35.6124C97.0371 46.331 91.8831 56.5572 86.1508 65.5599C81.5426 72.7971 73.8643 76.4385 66.8371 81.1313C60.2955 85.4998 54.1558 90.0174 46.6082 91.9666C36.9225 94.4679 26.3872 98.5129 17.4573 93.8837C8.15574 89.0617 1.52028 78.5928 0.162456 67.8892C-1.12079 57.7734 5.46162 48.7546 10.6318 40.0784C14.6786 33.2872 14.0916 26.6777 19.5 21C26.3848 13.7724 37.3138 5.5036 46.6082 2.31076Z;M41.4052 1.05605C49.9607 0.732752 57.1137 6.38532 64.9596 9.95457C75.5203 14.7588 91.0889 14.3051 95.1922 25.5247C99.2499 36.6193 86.9323 46.7205 82.388 57.6085C78.4249 67.104 77.8888 78.4861 70.2984 85.1697C62.4613 92.0705 51.6561 94.1672 41.4052 93.6952C31.4661 93.2375 21.9173 89.2714 14.3096 82.5916C7.06473 76.2302 5.94598 67.3654 4.33849 57.6368C2.86052 48.6922 6.49894 40.0695 9.90303 31.7149C13.0132 24.0818 12.9325 16.9807 19.0601 11.689C25.5227 6.10809 33.0169 1.37303 41.4052 1.05605Z;M48.6138 3.54848e-05C58.6242 -0.0182281 66.6636 7.01708 74.3978 12.9208C81.6807 18.48 89.9261 24.2835 91.6944 32.8845C93.401 41.1859 87.5944 48.9006 83.3296 56.3659C79.7809 62.5774 74.5772 67.2646 69.2166 72.2298C62.67 78.2934 57.6713 86.8004 48.6138 88.5204C38.9649 90.3528 28.859 86.7091 20.8236 81.4195C12.7265 76.0894 5.78361 68.3922 4.20977 59.2901C2.72262 50.6894 9.51667 43.2369 12.8113 35.0812C15.9097 27.4112 16.8359 18.96 22.9034 13.0148C29.7867 6.27011 38.609 0.0182889 48.6138 3.54848e-05Z;M39.5515 10.5772C49.3258 9.06318 59.5713 10.5133 68.1404 15.0972C77.3002 19.997 84.0466 27.8118 88.3921 36.7035C93.1444 46.4274 99.4161 58.2097 93.7574 67.5136C88.0206 76.9458 73.1455 76.1587 62.123 79.8944C54.5907 82.4472 47.4071 84.3669 39.5515 85.8849C29.1671 87.8917 17.8206 95.407 8.85194 90.1889C-0.0188828 85.0278 1.33921 72.6539 0.29344 63.0443C-0.547165 55.3199 0.392495 47.7479 3.44576 40.5112C6.35021 33.6271 11.2312 27.9318 17.1933 22.9888C23.822 17.4932 30.7531 11.9401 39.5515 10.5772Z;M45.2393 13.0185C54.5705 13.7111 63.4754 2.75952 72.1119 6.96409C80.985 11.2839 85.9959 23.0126 88.2699 33.9674C90.4499 44.4696 87.3495 55.0796 84.2089 65.2409C81.1734 75.0619 78.1773 85.8831 70.556 91.2794C63.1386 96.5313 52.7363 88.1248 44.0815 87.6978C35.8689 87.2926 28.571 93.6193 21.4232 88.8551C13.7689 83.7533 7.93467 75.4507 4.72564 65.8298C1.38111 55.8028 2.87662 50.0472 4.72566 39.5C6.76974 27.8403 8.19357 22.7306 17.5 18C27.1338 13.103 34.7619 12.2408 45.2393 13.0185Z;M48.7675 0.968518C58.2977 1.94283 67.1144 5.36882 75.1318 10.7608C83.5326 16.4106 93.2604 22.406 95.5843 32.4544C97.8739 42.3543 90.1154 51.2481 86.7044 60.7999C83.4667 69.8664 83.129 80.446 76.1429 86.8957C68.8383 93.6394 58.5331 96.8092 48.7675 95.8238C39.4507 94.8836 32.8945 86.9693 25.0325 81.7383C16.5686 76.1069 4.67997 73.748 1.04569 64.0724C-2.60897 54.3425 4.26134 44.193 7.17745 34.2024C10.1779 23.9227 10.0652 11.5331 18.3023 4.95092C26.5912 -1.67256 38.3255 -0.0990173 48.7675 0.968518Z;M51.4442 5.26243C60.7739 7.72511 64.6348 18.4476 72.3315 24.2674C79.7929 29.9093 93.0503 29.6682 95.6171 38.6636C98.2022 47.7233 86.9787 54.6757 83.5073 63.4342C80.3715 71.3458 82.903 81.8651 76.3445 87.2885C69.7504 92.7415 59.9352 91.007 51.4442 89.9485C43.8553 89.0026 37.7355 84.546 30.6796 81.5963C20.749 77.4448 6.8887 78.6171 1.73507 69.1677C-3.33734 59.8672 4.00681 48.7418 7.26292 38.6609C10.5256 28.5594 12.1764 17.0253 20.6445 10.624C29.166 4.18219 41.1156 2.53607 51.4442 5.26243Z;M53.4489 0.407062C64.2127 -1.21122 76.5707 1.98787 83.7798 10.1431C90.7214 17.9958 86.5941 30.157 88.804 40.4024C90.6894 49.1436 96.4545 56.7198 95.7491 65.6342C94.9105 76.2314 93.8674 89.597 84.5117 94.6443C74.9867 99.7829 64.2693 88.6734 53.4489 88.4547C43.0062 88.2437 32.8186 97.6737 23.285 93.4071C13.5313 89.042 9.46013 77.4185 6.11291 67.2704C2.75295 57.0837 -0.234962 45.6375 4.32659 35.9292C8.73836 26.5397 20.6851 24.4443 29.0917 18.3652C37.4707 12.306 43.2235 1.94439 53.4489 0.407062Z;M46.6082 2.31076C57.2676 -1.35097 69.9203 -0.913746 79.327 5.45168C88.8886 11.922 94.4841 23.8423 95.8203 35.6124C97.0371 46.331 91.8831 56.5572 86.1508 65.5599C81.5426 72.7971 73.8643 76.4385 66.8371 81.1313C60.2955 85.4998 54.1558 90.0174 46.6082 91.9666C36.9225 94.4679 26.3872 98.5129 17.4573 93.8837C8.15574 89.0617 1.52028 78.5928 0.162456 67.8892C-1.12079 57.7734 5.46162 48.7546 10.6318 40.0784C14.6786 33.2872 14.0916 26.6777 19.5 21C26.3848 13.7724 37.3138 5.5036 46.6082 2.31076Z"
                  dur="20.5s"
                ></animate>
              </path>
              <path
                opacity="0.8"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#13131b"
                className="path-2"
              >
                <animate
                  attributeName="d"
                  repeatCount="indefinite"
                  values="M46.6082 2.31076C57.2676 -1.35097 69.9203 -0.913746 79.327 5.45168C88.8886 11.922 94.4841 23.8423 95.8203 35.6124C97.0371 46.331 91.8831 56.5572 86.1508 65.5599C81.5426 72.7971 73.8643 76.4385 66.8371 81.1313C60.2955 85.4998 54.1558 90.0174 46.6082 91.9666C36.9225 94.4679 26.3872 98.5129 17.4573 93.8837C8.15574 89.0617 1.52028 78.5928 0.162456 67.8892C-1.12079 57.7734 5.46162 48.7546 10.6318 40.0784C14.6786 33.2872 14.0916 26.6777 19.5 21C26.3848 13.7724 37.3138 5.5036 46.6082 2.31076Z;M41.4052 1.05605C49.9607 0.732752 57.1137 6.38532 64.9596 9.95457C75.5203 14.7588 91.0889 14.3051 95.1922 25.5247C99.2499 36.6193 86.9323 46.7205 82.388 57.6085C78.4249 67.104 77.8888 78.4861 70.2984 85.1697C62.4613 92.0705 51.6561 94.1672 41.4052 93.6952C31.4661 93.2375 21.9173 89.2714 14.3096 82.5916C7.06473 76.2302 5.94598 67.3654 4.33849 57.6368C2.86052 48.6922 6.49894 40.0695 9.90303 31.7149C13.0132 24.0818 12.9325 16.9807 19.0601 11.689C25.5227 6.10809 33.0169 1.37303 41.4052 1.05605Z;M48.6138 3.54848e-05C58.6242 -0.0182281 66.6636 7.01708 74.3978 12.9208C81.6807 18.48 89.9261 24.2835 91.6944 32.8845C93.401 41.1859 87.5944 48.9006 83.3296 56.3659C79.7809 62.5774 74.5772 67.2646 69.2166 72.2298C62.67 78.2934 57.6713 86.8004 48.6138 88.5204C38.9649 90.3528 28.859 86.7091 20.8236 81.4195C12.7265 76.0894 5.78361 68.3922 4.20977 59.2901C2.72262 50.6894 9.51667 43.2369 12.8113 35.0812C15.9097 27.4112 16.8359 18.96 22.9034 13.0148C29.7867 6.27011 38.609 0.0182889 48.6138 3.54848e-05Z;M39.5515 10.5772C49.3258 9.06318 59.5713 10.5133 68.1404 15.0972C77.3002 19.997 84.0466 27.8118 88.3921 36.7035C93.1444 46.4274 99.4161 58.2097 93.7574 67.5136C88.0206 76.9458 73.1455 76.1587 62.123 79.8944C54.5907 82.4472 47.4071 84.3669 39.5515 85.8849C29.1671 87.8917 17.8206 95.407 8.85194 90.1889C-0.0188828 85.0278 1.33921 72.6539 0.29344 63.0443C-0.547165 55.3199 0.392495 47.7479 3.44576 40.5112C6.35021 33.6271 11.2312 27.9318 17.1933 22.9888C23.822 17.4932 30.7531 11.9401 39.5515 10.5772Z;M45.2393 13.0185C54.5705 13.7111 63.4754 2.75952 72.1119 6.96409C80.985 11.2839 85.9959 23.0126 88.2699 33.9674C90.4499 44.4696 87.3495 55.0796 84.2089 65.2409C81.1734 75.0619 78.1773 85.8831 70.556 91.2794C63.1386 96.5313 52.7363 88.1248 44.0815 87.6978C35.8689 87.2926 28.571 93.6193 21.4232 88.8551C13.7689 83.7533 7.93467 75.4507 4.72564 65.8298C1.38111 55.8028 2.87662 50.0472 4.72566 39.5C6.76974 27.8403 8.19357 22.7306 17.5 18C27.1338 13.103 34.7619 12.2408 45.2393 13.0185Z;M48.7675 0.968518C58.2977 1.94283 67.1144 5.36882 75.1318 10.7608C83.5326 16.4106 93.2604 22.406 95.5843 32.4544C97.8739 42.3543 90.1154 51.2481 86.7044 60.7999C83.4667 69.8664 83.129 80.446 76.1429 86.8957C68.8383 93.6394 58.5331 96.8092 48.7675 95.8238C39.4507 94.8836 32.8945 86.9693 25.0325 81.7383C16.5686 76.1069 4.67997 73.748 1.04569 64.0724C-2.60897 54.3425 4.26134 44.193 7.17745 34.2024C10.1779 23.9227 10.0652 11.5331 18.3023 4.95092C26.5912 -1.67256 38.3255 -0.0990173 48.7675 0.968518Z;M51.4442 5.26243C60.7739 7.72511 64.6348 18.4476 72.3315 24.2674C79.7929 29.9093 93.0503 29.6682 95.6171 38.6636C98.2022 47.7233 86.9787 54.6757 83.5073 63.4342C80.3715 71.3458 82.903 81.8651 76.3445 87.2885C69.7504 92.7415 59.9352 91.007 51.4442 89.9485C43.8553 89.0026 37.7355 84.546 30.6796 81.5963C20.749 77.4448 6.8887 78.6171 1.73507 69.1677C-3.33734 59.8672 4.00681 48.7418 7.26292 38.6609C10.5256 28.5594 12.1764 17.0253 20.6445 10.624C29.166 4.18219 41.1156 2.53607 51.4442 5.26243Z;M53.4489 0.407062C64.2127 -1.21122 76.5707 1.98787 83.7798 10.1431C90.7214 17.9958 86.5941 30.157 88.804 40.4024C90.6894 49.1436 96.4545 56.7198 95.7491 65.6342C94.9105 76.2314 93.8674 89.597 84.5117 94.6443C74.9867 99.7829 64.2693 88.6734 53.4489 88.4547C43.0062 88.2437 32.8186 97.6737 23.285 93.4071C13.5313 89.042 9.46013 77.4185 6.11291 67.2704C2.75295 57.0837 -0.234962 45.6375 4.32659 35.9292C8.73836 26.5397 20.6851 24.4443 29.0917 18.3652C37.4707 12.306 43.2235 1.94439 53.4489 0.407062Z;M46.6082 2.31076C57.2676 -1.35097 69.9203 -0.913746 79.327 5.45168C88.8886 11.922 94.4841 23.8423 95.8203 35.6124C97.0371 46.331 91.8831 56.5572 86.1508 65.5599C81.5426 72.7971 73.8643 76.4385 66.8371 81.1313C60.2955 85.4998 54.1558 90.0174 46.6082 91.9666C36.9225 94.4679 26.3872 98.5129 17.4573 93.8837C8.15574 89.0617 1.52028 78.5928 0.162456 67.8892C-1.12079 57.7734 5.46162 48.7546 10.6318 40.0784C14.6786 33.2872 14.0916 26.6777 19.5 21C26.3848 13.7724 37.3138 5.5036 46.6082 2.31076Z"
                  dur="20.5s"
                ></animate>
              </path>
            </svg>
          </div>
        </div>
        <section className="titania-texts titania-texts-left titania-texts-centerd">
          <div className="emoji emoji-paypal"></div>
          <h2>
            <div className="star"></div>
            <div className="star star-2"></div>
            Secure Payments
          </h2>
          <p>
            All payments are made with
            <span className="paypal-span">
              <span className="pay">Pay</span>
              <span className="pal">Pal</span>
            </span>
          </p>
        </section>
      </div>
      <div className="iphone-mockup iphone-mockup-2 iphone-mockup-left"></div>
    </section>
  );
};

export default MockupPayPal;
