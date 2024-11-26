import ProfileImage from "../../assets/images/news1.png";

const CommunityPost = () => {
  const postTitle = "First post";
  const content = 'Post Content';
  return (
    <div className="border rounded-md border-black w-[40%] p-4 mx-[5%] mt-[2%] ">
        <div className="flex flex-row  items-center space-x-2">

        <img src={ProfileImage} alt="Profile" className="rounded-sm h-[30px] w-[30px] object-cover " />
        <h1 className="text-xl  font-bold" >{postTitle}</h1>

        </div>
        <div className=" pt-2 pb-5 " >
          <hr />
            {content}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio provident quae accusamus deleniti! Maxime adipisci unde, ipsum cupiditate architecto a! Minima, atque at rerum vitae reprehenderit ab odio ex veritatis.
            <hr />
        </div>
        <div className="flex space-x-5 justify-end  " >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Like</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comment</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Share</button>
        </div>

    </div>
  );
};

export default CommunityPost;
