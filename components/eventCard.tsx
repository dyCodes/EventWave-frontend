import Image from "next/image";
import Link from "next/link";

export default function EventCard() {
  return (
    <Link
      href={"#"}
      className="relative w-[405px] h-[427px] rounded-lg bg-slate-50"
    >
      <span className="absolute top-6 right-6 p-1 rounded-full bg-[#FAFAFA]">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1595_2130)">
            <path
              d="M12.5 11C12.2348 11 11.9804 11.1054 11.7929 11.2929C11.6054 11.4804 11.5 11.7348 11.5 12C11.5 12.2652 11.6054 12.5196 11.7929 12.7071C11.9804 12.8946 12.2348 13 12.5 13C12.7652 13 13.0196 12.8946 13.2071 12.7071C13.3946 12.5196 13.5 12.2652 13.5 12C13.5 11.7348 13.3946 11.4804 13.2071 11.2929C13.0196 11.1054 12.7652 11 12.5 11Z"
              stroke="#383838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 11C5.23478 11 4.98043 11.1054 4.79289 11.2929C4.60536 11.4804 4.5 11.7348 4.5 12C4.5 12.2652 4.60536 12.5196 4.79289 12.7071C4.98043 12.8946 5.23478 13 5.5 13C5.76522 13 6.01957 12.8946 6.20711 12.7071C6.39464 12.5196 6.5 12.2652 6.5 12C6.5 11.7348 6.39464 11.4804 6.20711 11.2929C6.01957 11.1054 5.76522 11 5.5 11Z"
              stroke="#383838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5 11C19.2348 11 18.9804 11.1054 18.7929 11.2929C18.6054 11.4804 18.5 11.7348 18.5 12C18.5 12.2652 18.6054 12.5196 18.7929 12.7071C18.9804 12.8946 19.2348 13 19.5 13C19.7652 13 20.0196 12.8946 20.2071 12.7071C20.3946 12.5196 20.5 12.2652 20.5 12C20.5 11.7348 20.3946 11.4804 20.2071 11.2929C20.0196 11.1054 19.7652 11 19.5 11Z"
              stroke="#383838"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1595_2130">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="matrix(0 1 -1 0 24.5 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
      <Image src="/images/eventimage.jpg" alt="" width={400} height={235} />
      <div className="p-6 flex justify-between">
        <div className="w-[269px] flex flex-col gap-4">
          <p className="text-xl font-bold">Event Name</p>
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z"
                stroke="#0C0F14"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="10"
                r="3"
                stroke="#0C0F14"
                strokeWidth="1.5"
              />
            </svg>
            <p className=" font-semibold">Event Location</p>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99999 3.01758C9.58578 3.01758 9.24999 2.68179 9.24999 2.26758C9.24999 1.85336 9.58578 1.51758 9.99999 1.51758H13.5355C13.9497 1.51758 14.2855 1.85336 14.2855 2.26758C14.2855 2.68179 13.9497 3.01758 13.5355 3.01758H9.99999Z"
                fill="#3B3B3B"
              />
              <path
                d="M6.53033 3.46948C6.82322 3.76238 6.82322 4.23725 6.53033 4.53014L4.03033 7.03014C3.73744 7.32304 3.26256 7.32304 2.96967 7.03014C2.67678 6.73725 2.67678 6.26238 2.96967 5.96948L5.46967 3.46948C5.76256 3.17659 6.23744 3.17659 6.53033 3.46948Z"
                fill="#3B3B3B"
              />
              <path
                d="M12 5.74981C7.99594 5.74981 4.75 8.99575 4.75 12.9998C4.75 17.0039 7.99594 20.2498 12 20.2498C16.0041 20.2498 19.25 17.0039 19.25 12.9998C19.25 12.5856 19.5858 12.2498 20 12.2498C20.4142 12.2498 20.75 12.5856 20.75 12.9998C20.75 17.8323 16.8325 21.7498 12 21.7498C7.16751 21.7498 3.25 17.8323 3.25 12.9998C3.25 8.16732 7.16751 4.24981 12 4.24981C12.4142 4.24981 12.75 4.5856 12.75 4.99981C12.75 5.41403 12.4142 5.74981 12 5.74981Z"
                fill="#3B3B3B"
              />
              <path
                d="M17.1882 8.36407C17.4204 8.0655 17.394 7.64074 17.1265 7.37329C16.8591 7.10583 16.4343 7.07938 16.1357 7.3116L12.9658 9.77708L10.8944 11.2567C10.4519 11.5727 10.1893 12.083 10.1893 12.6268C10.1893 13.5566 10.9432 14.3105 11.873 14.3105C12.4168 14.3105 12.9271 14.0479 13.2431 13.6054L14.7227 11.534L17.1882 8.36407Z"
                fill="#3B3B3B"
              />
              <path
                d="M9.99999 3.01758C9.58578 3.01758 9.24999 2.68179 9.24999 2.26758C9.24999 1.85336 9.58578 1.51758 9.99999 1.51758H13.5355C13.9497 1.51758 14.2855 1.85336 14.2855 2.26758C14.2855 2.68179 13.9497 3.01758 13.5355 3.01758H9.99999Z"
                fill="#3B3B3B"
              />
              <path
                d="M6.53033 3.46948C6.82322 3.76238 6.82322 4.23725 6.53033 4.53014L4.03033 7.03014C3.73744 7.32304 3.26256 7.32304 2.96967 7.03014C2.67678 6.73725 2.67678 6.26238 2.96967 5.96948L5.46967 3.46948C5.76256 3.17659 6.23744 3.17659 6.53033 3.46948Z"
                fill="#3B3B3B"
              />
              <path
                d="M12 5.74981C7.99594 5.74981 4.75 8.99575 4.75 12.9998C4.75 17.0039 7.99594 20.2498 12 20.2498C16.0041 20.2498 19.25 17.0039 19.25 12.9998C19.25 12.5856 19.5858 12.2498 20 12.2498C20.4142 12.2498 20.75 12.5856 20.75 12.9998C20.75 17.8323 16.8325 21.7498 12 21.7498C7.16751 21.7498 3.25 17.8323 3.25 12.9998C3.25 8.16732 7.16751 4.24981 12 4.24981C12.4142 4.24981 12.75 4.5856 12.75 4.99981C12.75 5.41403 12.4142 5.74981 12 5.74981Z"
                fill="#3B3B3B"
              />
              <path
                d="M17.1882 8.36407C17.4204 8.0655 17.394 7.64074 17.1265 7.37329C16.8591 7.10583 16.4343 7.07938 16.1357 7.3116L12.9658 9.77708L10.8944 11.2567C10.4519 11.5727 10.1893 12.083 10.1893 12.6268C10.1893 13.5566 10.9432 14.3105 11.873 14.3105C12.4168 14.3105 12.9271 14.0479 13.2431 13.6054L14.7227 11.534L17.1882 8.36407Z"
                fill="#3B3B3B"
              />
            </svg>

            <p className=" font-semibold">Event Time</p>
          </div>
          <div className="flex gap-2 items-center text-[#30980C]">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#30980C" />
            </svg>

            <p className=" font-semibold">Time</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="bg-[#F2E6E6] px-4 py-1">
            <p className="font-bold text-[#962B2B]">OCT</p>
            <p className="text-2xl font-semibold text-[#800000]">08</p>
          </div>
          <p className="font-bold text-center">Free</p>
        </div>
      </div>
    </Link>
  );
}
