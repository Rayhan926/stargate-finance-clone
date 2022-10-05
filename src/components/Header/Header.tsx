import { headerNavigationItems } from "@config/constants";
import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center h-[92px] px-6 z-[999] bg-black">
      <div className="flex justify-between items-center w-full">
        <div>
          <a href="#">
            <svg
              width={132}
              height={34}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="jss1356"
            >
              <g clipPath="url(#logo-wide-dark_svg__a)">
                <path
                  d="M44.453 19.897h2.9c0 .981.49 1.62 2.346 1.62 1.684 0 2.281-.49 2.281-1.258 0-.383-.192-.682-.746-.81-.554-.127-1.407-.213-2.452-.299-1.514-.128-2.687-.362-3.326-.81-.598-.426-1.003-1.194-1.003-2.068 0-2.28 2.345-3.54 5.267-3.54 3.454 0 5.032 1.323 5.032 3.775h-2.857c-.022-1.11-.533-1.685-2.132-1.685-1.45 0-2.09.49-2.09 1.216 0 .447.17.788.768.938.533.128 1.47.213 2.601.32 1.3.128 2.218.256 3.006.704.683.383 1.173 1.172 1.173 2.089 0 2.217-1.897 3.519-5.501 3.519-3.71 0-5.267-1.578-5.267-3.711ZM57.545 19.812V15.42h-1.557v-2.517h1.258c.49 0 .662-.276.726-.916l.149-1.471h2.665v2.387h3.369v2.517h-3.369v4.221c0 1.088.511 1.429 1.79 1.429.449 0 1.11-.064 1.472-.15v2.452c-.277.064-1.173.236-2.047.236-3.283 0-4.456-1.45-4.456-3.796Z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.094 20.409c0-1.727 1.236-2.985 4.03-2.985h3.432v-.704c0-1.28-.724-1.792-2.217-1.792-1.215 0-1.92.512-1.92 1.365 0 .064 0 .235.022.448h-2.985a5.092 5.092 0 0 1-.043-.618c0-2.132 1.877-3.39 5.075-3.39 3.347 0 5.31 1.492 5.31 4.307v6.396h-3.242c.064-.532.15-1.492.15-2.132h-.022c-.32 1.493-1.514 2.304-3.432 2.304-2.453 0-4.158-1.067-4.158-3.2Zm7.462-1.023v-.214h-3.134c-.874 0-1.407.405-1.407 1.002 0 .81.703 1.237 1.876 1.237 1.685 0 2.665-.746 2.665-2.025Z"
                  fill="#fff"
                />
                <path
                  d="M77.309 12.903h3.24l-.128 3.007h.043c.448-2.005 1.578-3.178 3.646-3.178 2.154 0 3.412 1.386 3.412 4.116 0 .597-.064 1.535-.106 2.09h-2.943c.042-.512.064-1.045.064-1.365 0-1.535-.619-2.153-1.642-2.153-1.386 0-2.346 1.129-2.346 3.474v4.542h-3.24V12.903Z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M100.081 24.31c0 2.41-2.154 3.69-5.8 3.69-3.71 0-5.906-1.024-5.906-2.773 0-1.108.725-1.79 1.898-1.919v-.02c-.64-.406-.981-.982-.981-1.728 0-1.002.512-1.62 1.301-1.983v-.021c-1.11-.64-1.727-1.684-1.727-3.049 0-2.367 1.834-3.774 4.925-3.774 1.236 0 2.26.213 3.05.64l.02-.043c-.426-.384-.618-.81-.618-1.195 0-.873.874-1.385 2.218-1.385.576 0 .874.043 1.172.107v2.046a2.962 2.962 0 0 0-.64-.064c-.682 0-1.002.299-1.002.789 0 .256.086.576.235.96.341.532.511 1.173.511 1.92 0 2.366-1.833 3.75-4.946 3.75-.64 0-1.215-.062-1.749-.169a1.31 1.31 0 0 0-.191.682c0 .47.383.747 1.023.747h3.412c2.388 0 3.795 1.044 3.795 2.793Zm-3.242.449c0-.576-.426-.896-1.365-.896H92.98c-.875 0-1.386.363-1.386.96 0 .788.981 1.214 2.644 1.214 1.642 0 2.6-.447 2.6-1.278Zm-4.925-8.252c0 1.066.704 1.705 1.877 1.705 1.195 0 1.898-.639 1.898-1.705 0-1.087-.703-1.727-1.898-1.727-1.173 0-1.877.64-1.877 1.727ZM100.805 20.409c0-1.727 1.236-2.985 4.03-2.985h3.432v-.704c0-1.28-.725-1.792-2.217-1.792-1.215 0-1.919.512-1.919 1.365 0 .064 0 .235.021.448h-2.985a5.33 5.33 0 0 1-.043-.618c0-2.132 1.877-3.39 5.075-3.39 3.347 0 5.309 1.492 5.309 4.307v6.396h-3.241c.064-.532.15-1.492.15-2.132h-.022c-.32 1.493-1.514 2.304-3.432 2.304-2.452 0-4.158-1.067-4.158-3.2Zm7.462-1.023v-.214h-3.134c-.874 0-1.407.405-1.407 1.002 0 .81.703 1.237 1.876 1.237 1.684 0 2.665-.746 2.665-2.025Z"
                  fill="#fff"
                />
                <path
                  d="M113.916 19.812V15.42h-1.557v-2.517h1.259c.49 0 .661-.276.725-.916l.149-1.471h2.665v2.387h3.37v2.517h-3.37v4.221c0 1.088.512 1.429 1.792 1.429.448 0 1.108-.064 1.47-.15v2.452c-.277.064-1.173.236-2.046.236-3.284 0-4.457-1.45-4.457-3.796Z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M132.001 18.788h-7.484c.149 1.727 1.023 2.474 2.473 2.474 1.258 0 2.068-.448 2.154-1.472h2.857c-.064 2.41-2.069 3.818-5.075 3.818-3.497 0-5.672-1.985-5.672-5.332 0-3.476 2.175-5.544 5.736-5.544 2.942 0 5.011 1.685 5.011 5.14v.916Zm-2.857-1.898c0-1.194-.811-1.812-2.154-1.812-1.365 0-2.132.597-2.388 1.983h4.542v-.17Z"
                  fill="#fff"
                />
                <g clipPath="url(#logo-wide-dark_svg__b)">
                  <g clipPath="url(#logo-wide-dark_svg__c)" fill="#999">
                    <path d="m19.968 1.664.887 2.077a17.2 17.2 0 0 0 9.067 9.067l2.077.887c.544.232.985.564 1.326.96-1.034-7.417-6.9-13.283-14.317-14.317.395.34.728.782.96 1.326ZM1.326 13.695l2.077-.887a17.203 17.203 0 0 0 9.068-9.067l.886-2.077a3.6 3.6 0 0 1 .96-1.326C6.9 1.372 1.034 7.238 0 14.655c.34-.396.782-.728 1.326-.96ZM32 20.304l-2.078.887a17.2 17.2 0 0 0-9.067 9.068l-.887 2.076a3.6 3.6 0 0 1-.96 1.327c7.417-1.035 13.283-6.901 14.317-14.318a3.59 3.59 0 0 1-1.326.96ZM13.357 32.335l-.886-2.076a17.204 17.204 0 0 0-9.068-9.068l-2.077-.887A3.59 3.59 0 0 1 0 19.344c1.034 7.417 6.9 13.283 14.317 14.318a3.61 3.61 0 0 1-.96-1.327Z" />
                  </g>
                  <path
                    d="m9.103 15.371 1.023-.437a8.478 8.478 0 0 0 4.469-4.468l.436-1.024c.612-1.433 2.645-1.433 3.257 0l.436 1.024a8.478 8.478 0 0 0 4.469 4.468l1.024.437c1.433.612 1.433 2.644 0 3.256l-1.024.437a8.476 8.476 0 0 0-4.469 4.469l-.436 1.023c-.612 1.433-2.645 1.433-3.257 0l-.436-1.023a8.476 8.476 0 0 0-4.469-4.469l-1.023-.437c-1.434-.612-1.434-2.644 0-3.256Z"
                    fill="#fff"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="logo-wide-dark_svg__a">
                  <path fill="#fff" d="M0 0h132v34H0z" />
                </clipPath>
                <clipPath id="logo-wide-dark_svg__b">
                  <path
                    fill="#fff"
                    transform="translate(0 .338)"
                    d="M0 0h33.323v33.323H0z"
                  />
                </clipPath>
                <clipPath id="logo-wide-dark_svg__c">
                  <path
                    fill="#fff"
                    transform="translate(0 .338)"
                    d="M0 0h33.323v33.323H0z"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center">
            {headerNavigationItems.map(({ text, url }, i) => (
              <li key={i} className="px-[1.25rem]">
                <a
                  href={url}
                  className="text-[#757575] font-roc-grotesk font-medium text-[0.875rem] inline-block opacity-[0.7]"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <button className="group relative whitespace-nowrap bg-[#EFEFEF] tracking-[0.04em] hover:bg-[#bcbcbc] duration-200 px-4 pt-[13px] leading-4 pb-[11px] font-roc-grotesk font-medium text-black text-[0.875rem] rounded-xl">
            Connect Wallet
            <span className="inline-block absolute w-0 group-hover:w-[calc(100%-32px)] h-px bg-black left-4 bottom-2.5 duration-200"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
