import i18n from "i18next";

import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)








const resources = {
  RU: {
    translation: {
      "News": "Первенство Московской области по спортивной борьбе (вольная борьба) среди юниоров до 24 лет",
      "PageFilter": "Фильтр ленты",
      "All": "Все",
      
      "CompetitionResults": "Результаты соревнований",
      "Video": "Видео",
      "Achievements": "Достижения",
      "ads":"Ваша реклама может быть здесь",
      
      "Matveev": "Матвеев",
      
      /////////////////////////////
      "Romanov": "Романов",
      "FinalMatch": "Финальный матч - вольная борьба",
      "WatchLiveStream": "Смотреть трансляцию",
      "coolNews": "Интересные подписки",
      
      ///////////////////////////////////////////
      "SportWrestling": "Спортивная Борьба",
      "data":'2 Апреля, 14:00',
      "InterviewDate": "12 марта, 2024 в 16:03",
      "InterviewTitle": "Илья Бессонов дал интервью для телеканала Россия-1",
      "InterviewContent": "Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...",
      "ReadMore": "Читать больше",
      "Views": "4.1 K",

     
      
      "VadimDavydov": "Вадим Давыдов",
      "Comment1": "Наконец-то! Рад, что он вернулся в спорт",
      "CommentTime": "15 минут назад",
      "Reply": "Ответить",
      "SeeAllComments": "Смотреть все комментарии",
      
      //////////////////////////////////////////////////
      "CompetitionResultsgeneral": "Результаты соревнования по чемпионату 2024 по спортивной борьбе (греко-римская борьба)",
      "BestMoments": "Лучшие моменты соревнования",
      "Viewsgeneral": "4.1 тыс.",
      "Duration": "04:15",
      "ViewAll": "Смотреть все",
      
      /////////////////////////////////////////////////
      "SpringCollection": "Весенняя коллекция одежды",
      
      ////////////////////////////////////////////////
      "EventDate": "24 февраля, 2024 в 15:55",
      "AthleteName": "Александр Магомедов",
      "AthleteRole": "Спортсмен",
      "AchievementsPlayer": "Призер Олимпийских игр, двукратный призер чемпионатов мира",
      "Placement": "Занял 1-е место",
      "EventDetails": "В Спортивном чемпионате 2024 по греко-римской борьбе среди юниоров до 24",
      "CongratulatedBy": "Дмитрий Зайцев ",
      "moreCongrats": "и еще 500 человек поздравили",
      "Congratulate": "Поздравить",
      "lastNews": "Последние новости",
      
      //////////////////////////////////////////
      "Cycling": "Велоспорт",
      "EventDategeneral": "2 февраля, 2024 в 23:09",
      "TourStages": "Этапы Тура Альп-2024",
      "CompetitionPhotos": "Фото с соревнований",
      
      ///////////////////////////////////////////////
      "SportsWrestling": "Спортивная Борьба",
      "EllipseAltText": "Ellipse",
      "EventDateplus": "12 марта, 2024 в 16:03",
      "EventDescription": "Запись соревнования по вольной борьбе в Санкт-Петербурге",
      "ViewsLabel": "Eye",
      "ViewsCount": "82 K",
      "MessagesLabel": "Message",
      "MessagesCount": "1",
      "ProfileName": "Вадим Давыдов",
      "ProfileComment": "Наконец-то! Рад, что он вернулся в спорт",
      "TimeAgo": "15 минут назад",
      "ReplyText": "Ответить",
      "FilterLabel": "Фильтр ленты",
      "AllLabel": "Все",
      "ResultsLabel": "Результаты соревнований",
      "VideosLabel": "Видео",
      "AchievementsLabel": "Достижения",
      "FeedLabel": "лента",
      "Competition": "Cоревнования",
      "MarketplaceLabel": "Маркетплейс",
      "RatingLabel": "Рейтинг",
      "OrganizationsLabel": "Организации",
      "LiveLabel": "Live",
      "subscribe":"Подписаться",
      "date1":"12 марта, 2024 в 16:03"
     
    }
  },
  EN: {
    translation: {
      "News": "Moscow Region Championship in Wrestling (Freestyle Wrestling) among Juniors Under 24",
      "PageFilter": "Feed Filter",
      "All": "All",
      "CompetitionResults": "Competition Results",
      "Video": "Video",
      "Achievements": "Achievements",
      
      "Matveev": "Matveev",
      "data":'2 April, 14:00',   
     "coolNews": "Interesting subscriptions",
      
      /////////////////////////////
      "Romanov": "Romanov",
      "FinalMatch": "Final Match - Freestyle Wrestling",
      "WatchLiveStream": "Watch Live Stream",
      
      ///////////////////////////////////////////
      "SportWrestling": "Sports Wrestling",
      "InterviewDate": "March 12, 2024 at 16:03",
      "InterviewTitle": "Ilya Bessonov gave an interview for Channel Russia-1",
      "InterviewContent": "Ilya Bessonov gave an interview after a long break, where he shared the secret of his success and spoke about his training methods. The athlete announced that he is returning to sports and ...",
      "ReadMore": "Read More",
      "Views": "4.1 K",
      
      "VadimDavydov": "Vadim Davydov",
      "Comment1": "Finally! Glad that he has returned to sports",
      "CommentTime": "15 minutes ago",
      "Reply": "Reply",
      "SeeAllComments": "See All Comments",
      
      //////////////////////////////////////////////////
      "CompetitionResultsgeneral": "Results of the 2024 Championship in Greco-Roman Wrestling among Juniors under 24",
      "BestMoments": "Best Moments of the Competition",
      "Viewsgeneral": "4.1 K",
      "Duration": "04:15",
      "ViewAll": "View All",
      
      /////////////////////////////////////////////////
      "SpringCollection": "Spring Clothing Collection",
      
      ////////////////////////////////////////////////
      "EventDate": "February 24, 2024 at 15:55",
      "AthleteName": "Alexander Magomedov",
      "AthleteRole": "Athlete",
      "AchievementsPlayer": "Olympic Games Medalist, Two-time World Championship Medalist",
      "Placement": "1st Place",
      "EventDetails": "In the 2024 Sports Championship in Greco-Roman Wrestling among Juniors under 24",
      "CongratulatedBy": "Dmitry Zaitsev",
      "moreCongrats": "and 500 more people congratulated",
      "Congratulate": "Congratulate",
      
      //////////////////////////////////////////
      "Cycling": "Cycling",
     "lastNews": "Last News",
      "EventDategeneral": "February 2, 2024 at 23:09",
      "TourStages": "Tour of the Alps 2024 Stages",
      "CompetitionPhotos": "Competition Photos",
      
      ///////////////////////////////////////////////
      "SportsWrestling": "Sports Wrestling",
      "EllipseAltText": "Ellipse",
      "EventDateplus": "March 12, 2024 at 16:03",
      "EventDescription": "Record of the freestyle wrestling competition in Saint Petersburg",
      "ViewsLabel": "Eye",
      "ViewsCount": "82 K",
      "MessagesLabel": "Message",
      "MessagesCount": "1",
      "ProfileName": "Vadim Davydov",
      "ProfileComment": "Finally! Glad that he has returned to sports",
      "TimeAgo": "15 minutes ago",
      "ReplyText": "Reply",
      "FilterLabel": "Feed Filter",
      "AllLabel": "All",
      "ResultsLabel": "Competition Results",
      "VideosLabel": "Videos",
      "AchievementsLabel": "Achievements",
      "FeedLabel": "Feed",
      "MarketplaceLabel": "Marketplace",
      "RatingLabel": "Rating",
      "OrganizationsLabel": "Organizations",
      "LiveLabel": "Live",
      "ads": "Your advertisment could be here",
      "subscribe":"Subscribe",
      "date1":"12 марта, 2024 в 16:03"
    }
  },
  CN: {
    translation: {
      "subscribe":"訂閱",
      "lastNews":"最新消息",
      "News": "莫斯科地區 24 歲以下青少年摔角錦標賽（自由式摔角）",
      "PageFilter": "内容筛选",
      "All": "全部",
      "CompetitionResults": "比赛结果",
      "ads":"您的廣告可能在這裡",
      "Video": "视频",
      "Achievements": "成就",
      "coolNews": "有趣的訂閱",
      
      "Matveev": "马特维耶夫",
      "data":'2 週六，14:00',
     "date1":"2024 年 5 月 12 日 16:03",
      
      /////////////////////////////
      "Romanov": "罗曼诺夫",
      "FinalMatch": "决赛 - 自由式摔跤",
      "WatchLiveStream": "观看直播",
      "Competition": "比賽",
      
      ///////////////////////////////////////////
      "SportWrestling": "体育摔跤",
      "InterviewDate": "2024年3月12日 16:03",
      "InterviewTitle": "伊利亚·别索诺夫接受了俄罗斯-1频道的采访",
      "InterviewContent": "伊利亚·别索诺夫在长时间休息后接受了采访，分享了他的成功秘诀，并讲述了他的训练方法。运动员宣布他将重返体育界……",
      "ReadMore": "阅读更多",
      "Views": "4.1 K",
      
      "VadimDavydov": "瓦迪姆·达维多夫",
      "Comment1": "终于！很高兴他重返体育界",
      "CommentTime": "15分钟前",
      "Reply": "回复",
      "SeeAllComments": "查看所有评论",
      
      //////////////////////////////////////////////////
      "CompetitionResultsgeneral": "2024年青少年格斗摔跤锦标赛结果（24岁以下）",
      "BestMoments": "比赛最佳时刻",
      "Viewsgeneral": "4.1 K",
      "Duration": "04:15",
      "ViewAll": "查看全部",
      
      /////////////////////////////////////////////////
      "SpringCollection": "春季服装系列",
      
      ////////////////////////////////////////////////
      "EventDate": "2024年2月24日 15:55",
      "AthleteName": "亚历山大·马戈梅多夫",
      "AthleteRole": "运动员",
      "AchievementsPlayer": "奥运会奖牌得主，双料世界锦标赛奖牌得主",
      "Placement": "第1名",
      "EventDetails": "在2024年24岁以下青少年格斗摔跤锦标赛中",
      "CongratulatedBy": "德米特里·扎伊采夫",
      "moreCongrats": "以及500多人祝贺",
      "Congratulate": "祝贺",
      
      //////////////////////////////////////////
      "Cycling": "自行车赛",
      "EventDategeneral": "2024年2月2日 23:09",
      "TourStages": "2024年阿尔卑斯山之旅阶段",
      "CompetitionPhotos": "比赛照片",
      
      ///////////////////////////////////////////////
      "SportsWrestling": "体育摔跤",
      "EllipseAltText": "椭圆",
      "EventDateplus": "2024年3月12日 16:03",
      "EventDescription": "圣彼得堡自由式摔跤比赛记录",
      "ViewsLabel": "眼睛",
      "ViewsCount": "82 K",
      "MessagesLabel": "消息",
      "MessagesCount": "1",
      "ProfileName": "瓦迪姆·达维多夫",
      "ProfileComment": "终于！很高兴他重返体育界",
      "TimeAgo": "15分钟前",
      "ReplyText": "回复",
      "FilterLabel": "内容筛选",
      "AllLabel": "全部",
      "ResultsLabel": "比赛结果",
      "VideosLabel": "视频",
      "AchievementsLabel": "成就",
      "FeedLabel": "内容",
      "MarketplaceLabel": "市场",
      "RatingLabel": "评级",
      "OrganizationsLabel": "组织",
      "LiveLabel": "直播"
    }
  }
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'RU',
    
    
    
    
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


  export default i18n;