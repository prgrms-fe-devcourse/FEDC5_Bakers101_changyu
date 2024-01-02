const getPostLiveTime = (createdAt : string) => {
    const nowTime = new Date();
    const createdTime = new Date(createdAt);

    const compareTime = (nowTime.getFullYear() * 525600) -  (createdTime.getFullYear() * 525600) +
                        (nowTime.getMonth() * 43800) -  (createdTime.getMonth() * 43800) + 
                        (nowTime.getDate() * 1440) -  (createdTime.getDate() * 1440) + 
                        (nowTime.getHours() * 60) -  (createdTime.getHours() * 60) + 
                        (nowTime.getMinutes()) -  (createdTime.getMinutes());
    if (compareTime < 60 && compareTime >= 0) {
        return compareTime === 0 ? '0분 전' : `${Math.floor(compareTime)}분 전`
    }    
    else if (compareTime < 1440) {
        return `${Math.floor(compareTime / 60)}시간 전`
    }
    else {
        return `${createdTime.getFullYear().toString().slice(2,4)}.${createdTime.getMonth()+1}.${createdTime.getDate()}`;
    }
}

export default getPostLiveTime;