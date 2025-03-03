import React from 'react';
import { useEffect, useState } from "react";
import { Edit2, Loader2, Menu, Music, Video, ShoppingBag, MessageCircle, Heart, Clock, MapPin, DollarSign, Users, User, ExternalLink, ChevronRight, Play, Share2 } from 'lucide-react';
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const styles = {
  gradients: {
    primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    secondary: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    accent: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
  },
  colors: {
    primary: "#667eea",
    secondary: "#764ba2",
    accent: "#f6d365",
    background: "#f8fafc"
  }
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 }
};

const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchLandingPageData = async () => {

      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#0bf9b2",
          "gradientEnd": "#f1ce09"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);

    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };


  if (!landingPageData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-md mx-auto mt-8"
      >
        <Card>
          <CardContent className="pt-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="flex justify-center"
            >
              <Loader2 className="h-8 w-8 text-gray-500" />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;



  return (
    <div className="min-h-screen" style={{
      background: styles.gradients.primary,
    }}>
      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-0 w-full z-50">
        <Card className="rounded-none shadow-sm bg-white/80 backdrop-blur-md border-none">
          <CardContent className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl tracking-tight text-gray-900">@{username}</h2>
              
              {/* Desktop Navigation */}
              <Tabs className="hidden md:block">
                <TabsList className="hidden md:flex">
                  <TabsTrigger
                    value="performances"
                    onClick={() => scrollToSection('performances')}
                    className="hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <Music className="w-4 h-4" />
                    Performances
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    onClick={() => scrollToSection('videos')}
                    className="hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <Video className="w-4 h-4" />
                    Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="songsSale"
                    onClick={() => scrollToSection('songsSale')}
                    className="hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <Music className="w-4 h-4" />
                    Songs Sale
                  </TabsTrigger>
                  <TabsTrigger
                    value="merchandise"
                    onClick={() => scrollToSection('merchandise')}
                    className="hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Merchandise
                  </TabsTrigger>
                  <TabsTrigger
                    value="fanMessages"
                    onClick={() => scrollToSection('messages')}
                    className="hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="support"
                    onClick={() => scrollToSection('support')}
                    className="hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Support
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-2 space-y-2">
                <button
                  onClick={() => {
                    scrollToSection('performances');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition-all duration-300 rounded-md flex items-center gap-3"
                >
                  <Music className="w-4 h-4" />
                  Performances
                </button>
                <button
                  onClick={() => {
                    scrollToSection('videos');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition-all duration-300 rounded-md flex items-center gap-3"
                >
                  <Video className="w-4 h-4" />
                  Videos
                </button>
                <button
                  onClick={() => {
                    scrollToSection('songsSale');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition-all duration-300 rounded-md flex items-center gap-3"
                >
                  <Music className="w-4 h-4" />
                  Songs Sale
                </button>
                <button
                  onClick={() => {
                    scrollToSection('merchandise');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition-all duration-300 rounded-md flex items-center gap-3"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Merchandise
                </button>
                <button
                  onClick={() => {
                    scrollToSection('messages');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition-all duration-300 rounded-md flex items-center gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Messages
                </button>
                <button
                  onClick={() => {
                    scrollToSection('support');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-white/20 transition-all duration-300 rounded-md flex items-center gap-3"
                >
                  <Heart className="w-4 h-4" />
                  Support
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </nav>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 pt-[80px] md:pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div
            className="lg:col-span-4 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-auto"
            style={{ overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex flex-col items-center space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Avatar className="w-32 h-32 ring-4 ring-white/50">
                        <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
                        <AvatarFallback className="text-2xl">{username}</AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <h2 className="text-3xl font-bold mt-4 tracking-tight text-gray-900">{artistPage.artistName}</h2>
                    <Badge variant="secondary" className="mt-1 px-4 py-1 text-sm font-medium">
                      {artistPage.stageTitles}
                    </Badge>
                  </div>

                  {/* Social Links Section with improved spacing */}
                  <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-6 text-gray-800">Connect with me on:</h3>
                    <div className="flex flex-col space-y-4">
                      {musicPlatformLinks.map((link) => (
                        <motion.button
                          whileHover={{ y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          key={link.musicPlatform + link.url}
                          className="flex items-center p-2 border border-white/20 rounded-full shadow-md hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl bg-white/5 backdrop-blur-sm group"
                          onClick={() => link.url && window.open(link.url, '_blank')}
                        >
                          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 mr-4">
                            {link.icon ? (
                              <img
                                src={link.icon}
                                alt={`${link.musicPlatform} icon`}
                                className="w-14 h-14 object-cover rounded-full"
                              />
                            ) : null}
                          </div>
                          <span className="text-sm font-medium flex-1">
                            {link.musicPlatform || ' '}
                          </span>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
                <CardDescription>{artistPage.artistBio}</CardDescription>
              </CardHeader>
            </Card>

            {/* Music Videos Section */}
            <div id="videos">
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Music Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {musicVideos.map((video) => (
                      <motion.div
                        key={video.videoId}
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <Card
                          className="overflow-hidden cursor-pointer w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                          onClick={() => window.open(video.redirectURL, '_blank')}
                        >
                          <div className="relative">
                            <div className="w-full" style={{ paddingTop: '66.66%' }}>
                              <img
                                src={video.imageURL}
                                alt={video.title}
                                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <Play className="w-12 h-12 text-white" />
                              </div>
                            </div>
                            <div className="p-2 bg-white/90 backdrop-blur-sm flex justify-between items-center">
                              <span className="font-medium">{video.title}</span>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon">
                                  <Share2 className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>

                </CardContent>
              </Card>
            </div>


            {/* Scrollable Sections */}
            <ScrollArea className="">


              {/* Performances Section */}
              <div id="performances" className="mt-8">
                <div className="p-6 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg mb-12 border border-white/20">
                  <h2 className="text-4xl font-bold text-center text-white mb-8 tracking-tight">
                    Performances
                  </h2>

                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-6"
                  >
                    {performances.map((perf, index) => (
                      <motion.div
                        key={perf.performanceId}
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card 
                          key={perf.performanceId} 
                          className="mb-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/95 hover:bg-white/100 transform hover:-translate-y-1"
                        >
                          <CardHeader className="space-y-2">
                            <CardTitle className="text-2xl font-bold tracking-tight">{perf.eventTitle}</CardTitle>
                            <CardDescription className="text-base space-y-2">
                              <p className="text-gray-600">{perf.description}</p>
                              <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-500">Duration:</span>
                                  <span className="font-medium">{perf.durationMinutes} mins</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-500">Location:</span>
                                  <span className="font-medium">{perf.platform}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <DollarSign className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-500">Price:</span>
                                  <span className="font-medium">${perf.ticketPrice}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {perf.performanceType === 'Team' ? (
                                    <Users className="w-4 h-4 text-gray-500" />
                                  ) : (
                                    <User className="w-4 h-4 text-gray-500" />
                                  )}
                                  <span className="font-medium">{perf.performanceType}</span>
                                </div>
                              </div>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button
                              className="mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-none flex items-center gap-2"
                            >
                              <ShoppingBag className="w-4 h-4" />
                              Book Now
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Songs sales Section */}
              <div id="songsSale">
                <div className="p-6 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg mb-12 border border-white/20">
                  <h2 className="text-4xl font-bold text-center text-white mb-8 tracking-tight">
                    Songs for Sale
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {songSales.map((song) => (
                      <div
                        key={song.songId}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                      >
                        <div className="h-48 relative">
                          <img
                            src={song.imageURL}
                            alt={song.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="p-6 flex-grow flex flex-col justify-between">
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold tracking-tight">{song.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {song.description}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span className="flex items-center gap-2">
                                <Music className="w-4 h-4" />
                                {song.priceType}
                              </span>
                              {song.price && (
                                <span className="font-medium flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  {song.price}
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            className="mt-4 w-full px-4 py-2 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                          >
                            View Songs
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Merchandise Section */}
              <div id="merchandise">
                <div className="p-6 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg mb-12 border border-white/20">
                  <h2 className="text-4xl font-bold text-center text-white mb-8 tracking-tight">
                    Merchandise
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {merchandise.map((merc) => (
                      <div
                        key={merc.merchId}
                        className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                      >
                        <div className="h-48 relative">
                          <img
                            src={merc.imageURL}
                            alt={merc.merchName}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="p-6 flex-grow flex flex-col justify-between">
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold tracking-tight">{merc.merchName}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {merc.merchDescription}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span>Price: ${merc.price}</span>
                              <span>Type: {merc.merchType}</span>
                            </div>
                          </div>
                          <button
                            className="mt-4 w-full px-4 py-2 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                          >
                            View Bundle
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Messages Section */}
              <div id="messages" className="space-y-6">
                {fanMessages && (
                  <div className="p-8 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg mb-12 border border-white/20">
                    <h2 className="text-4xl font-bold text-center text-white mb-8 tracking-tight">
                      Fan Messages
                    </h2>
                    <Card className="mb-4">
                      <CardHeader className="space-y-3">
                        <CardTitle className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          Message Me
                        </CardTitle>
                        <CardDescription className="text-base space-y-2">
                          <p>{fanMessages.description}</p>
                          <p className="font-medium">
                            Promised Reply Time: {fanMessages.promisedReplyTime} hours
                          </p>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          className="mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-none transform transition-all duration-300 hover:scale-105"
                        >
                          Send Message
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
              {/* Support Section */}
              <div id="support">
                {supportPage && (
                  <div className="p-6 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg mb-8 border border-white/20">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Support Me</h2>

                    <Card className="mb-4 border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/95">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          Support
                        </CardTitle>
                        <CardDescription>
                          {supportPage.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          className="mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-none transform transition-all duration-300 hover:scale-105"
                        >
                          Support
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
    </ScrollArea>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 mt-8 hover:bg-gray-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">© 2023 Vishal Mishra. All rights reserved.</p>
          <div className="mt-2">
            <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
            <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          </div>
        </div>
      </footer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageView1;
