import "./styles/HomeHeader.css";
import { IoSearch } from "react-icons/io5";
import { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import type { Anime } from "../types/Anime";
import { MdAccountCircle } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

export default function Header({ animeList }: { animeList: Anime[] }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const accountDropDownItems=[{
    name:"Profile",
    // link:"/profile",
    icon: <FaAddressBook/>
  },{
    name:"Settings",
    // link:"/settings",
    icon: <IoMdSettings/>
  },{
    name:"Logout",
    // link:"/logout",
    icon: <FiLogOut/>
  }]



  const filteredAnimeList = useMemo(() => {
    if (searchValue.length === 0)
      return animeList.filter((anime, index) => {
        return (
          anime.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          index < 10
        );
      });
    return animeList.filter((anime) => {
      return anime.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [animeList, searchValue]);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
    }
  };
  useState(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (searchValue.length > 0) {
      setIsSearchOpen(false);
      setIsFocused(false);
      setSearchValue("");
      console.log("search and", searchValue);
      navigate(`/search/${searchValue}`);
    }
  };
  return (
    <div className="header-container">
      <div className="header-logo" onClick={() => navigate("/")}>
        <img src="/src/assets/logoWithoutBack.png" alt="" />
      </div>
      <div className="main-header">
        <div className="header-icons">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="search-list-anime" ref={searchRef}>
              <div
                className={`search-container ${isSearchOpen ? "open" : ""}`}
                onClick={() => {
                  if (isSearchOpen) return;
                  setIsSearchOpen(true);
                  if (isAccountOpen) {
                    setIsAccountOpen(false);
                  }
                }}
              >
                <IoSearch
                  className="search-icon"
                  onClick={() => {
                    if (isSearchOpen) {
                      handleSubmit();
                    } 
                  }}
                />
                {isSearchOpen && (
                  <>
                    <input
                      type="text"
                      placeholder="Search anime..."
                      autoFocus
                      onFocus={() => setIsFocused(true)}
                      onChange={(e) => setSearchValue(e.target.value)}
                      value={searchValue}
                    />
                    <IoClose
                      className="close-search-icon"
                      onClick={() => {
                        setIsSearchOpen(false);
                        setIsFocused(false);
                      }}
                    />
                  </>
                )}
              </div>
              {isFocused && filteredAnimeList.length > 0 && (
                <div className="search-list">
                  <div
                    className="search-list-link-to-sp"
                    onClick={() => {
                      navigate("/search");
                    }}
                  >
                    <div>Open search page</div>
                  </div>
                  {filteredAnimeList.map((anime) => (
                    <div
                      key={anime.name}
                      className="search-list-item"
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigate(`/anime/${anime.link}`, {
                          state: { animeName: anime },
                        });
                      }}
                    >
                      <div className="search-list-item-img">

                      <img src={anime.logo} alt={anime.name} />
                      </div>
                      <h1>{anime.name}</h1>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>
          <div className="header-account-tab-container">
          <div className={`header-account-container ${isAccountOpen ? "open" : ""}`}
            onClick={() => {
              setIsAccountOpen((prev) => !prev);
              if (isSearchOpen) {
                setIsSearchOpen(false);
              }
            }}
          >
            {isAccountOpen && (
              <div className="header-account-username">
                User Name
              </div>
            )}
            <MdAccountCircle className="header-account-icon" 
              // onClick={() => {
              //   // if (isAccountOpen) {
              //     // console.log("close");
              //     setIsAccountOpen(false);
              //   // } 
              // }}
            />
          </div>
            {isAccountOpen && (
              <div className="header-account-dropdown">
                {
                  accountDropDownItems.map((item,index)=>(
                    <div className="header-account-dropdown-item" key={index}>
                      <div className="header-account-dropdown-item-icon">
                        {item.icon}
                      </div>
                      <div className="header-account-dropdown-item-name">
                        {item.name}
                      </div>
                  </div>
                  ))
                }
                {/* <div className="header-account-dropdown-item">
                  <div>Profile</div>
                </div>
                <div className="header-account-dropdown-item">
                  <div>Settings</div>
                </div>
                <div className="header-account-dropdown-item">
                  <div>Logout</div>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
