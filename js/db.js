const memberDB = new Map();
const diaryDB = new Map();

// Member DB START
const addMember = (id, pw, mail) => {
  console.log("addMember() CALLED!!");

  memberDB.set(id, {
    u_id: id,
    u_pw: pw,
    u_mail: mail,
  });

  diaryDB.set(id, []);
  console.log(memberDB.get(id));
};

const searchMember = () => {
  console.log("searchMember() CALLED!!");

  let memObj = memberDB.get(id);
  if (memObj !== undefined && memObj.u_pw === pw) {
    console.log("SIGN IN SUCCESS!!");
    return true;
  }

  console.log("SIGN IN FAIL");
  return false;
};

// Member DB END

// Diary DB START
const addDiary = (txt) => {
  console.log("addDiary() CALLED!!");

  let diaryArr = diaryDB.get(siginInedMemberId);
  diaryArr.push(txt);
};

const searchDiary = () => {
  console.log("searchDiary() CALLED!!");
  let diaryArr = diaryDB.get(siginInedMemberId);
  diaryArr.push(txt);
  return diaryArr;
};

// Diary DB END
