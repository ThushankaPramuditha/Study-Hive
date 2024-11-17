import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./SideBarnNavbar"; 
import user from "../assets/images/user1.jpg";



const Forums = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ category: "", content: "" });
  const [error, setError] = useState(null);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentsPopup, setShowCommentsPopup] = useState(false);
  const [userVote, setUserVote] = useState(null);

  const handleVote = (commentId, type) => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === commentId) {
          const updatedComment = { ...comment };
  
          if (updatedComment.userVote === type) {
            if (type === 'upvote') updatedComment.upvote -= 1;
            else if (type === 'downvote') updatedComment.downvote -= 1;
            updatedComment.userVote = null;
          } else {
            if (type === 'upvote') {
              updatedComment.upvote += 1;
              if (updatedComment.userVote === 'downvote') updatedComment.downvote -= 1;
            } else if (type === 'downvote') {
              updatedComment.downvote += 1;
              if (updatedComment.userVote === 'upvote') updatedComment.upvote -= 1;
            }
            updatedComment.userVote = type;
          }
  
          return updatedComment;
        }
        return comment;
      })
    );
  
  
    fetch(`/api/questions/${questionId}/comments/${commentId}/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(updatedComment => {
        setComments(prevComments =>
          prevComments.map(comment =>
            comment.id === updatedComment.id ? updatedComment : comment
          )
        );
      })
      .catch(error => {
        console.error('Error updating vote:', error);
      });
  };
  
  const categories = [
    "All",
    "Computer S.",
    "Law",
    "Biology",
    "Chemistry",
    "Engineering",
    "Medicine",
  ];

  useEffect(() => {
    fetchQuestions(); // Fetch questions when the component mounts
    decodeJWT(localStorage.getItem("token"));
  }, []);

  
  function decodeJWT(token) {
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature) {
      console.error('Invalid token structure');
      return null;
    }
  
    const base64UrlToBase64 = (base64Url) => {
      return base64Url.replace(/-/g, '+').replace(/_/g, '/');
    };
  
    const decodeBase64 = (base64) => {
      const decoded = atob(base64); // Decode base64 string
      try {
        return JSON.parse(decoded); // Parse as JSON
      } catch (e) {
        console.error('Failed to parse JSON:', e);
        return null;
      }
    };
  
    const decodedPayload = decodeBase64(base64UrlToBase64(payload));
    return decodedPayload; // Return the decoded payload, which contains the email
  }
  

  const postQuestion = async (questionData) => {
    try {
      const token = localStorage.getItem("token");
      const decodedPayload = decodeJWT(token);  // Decode the token
  
      console.log("Decoded Payload:", decodedPayload);  // Log decoded payload
  
      const email = decodedPayload?.sub;  // Use 'sub' as the email field
  
      if (!email) {
        console.error("No email found in the token");
        return;
      }
  
      // Proceed with posting the question
      await axios.post("http://localhost:8080/api/questions", questionData, {
        params: { userEmail: email },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      fetchQuestions();
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };
  
  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8080/api/questions", {
        headers: {
          Authorization: `Bearer ${token}`, // Use backticks and proper syntax
        },
      });
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setError(error);
    }
  };

  
  const postComment = async (questionId, commentData) => {
    try {
      const token = localStorage.getItem("token");
      const decodedPayload = decodeJWT(token);  // Decode the token
      const email = decodedPayload?.sub;  // Use 'sub' as the email field
  
      if (!email) {
        console.error("No email found in the token");
        return;
      }
  
      // Send the commentData along with the authorEmail
      await axios.post(`http://localhost:8080/api/questions/${questionId}/comments`, {
        ...commentData,
        authorEmail: email,  // Pass the decoded email to backend
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });
  
      fetchQuestions(); // Refetch questions to update the list
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  

// Function to fetch comments for a given question
const fetchComments = async (questionId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`http://localhost:8080/api/questions/${questionId}/comments`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the headers
      },
    });
    setComments(response.data); 
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};



  const handleSubmit = (event) => {
    event.preventDefault();
    postQuestion(newQuestion);
    setNewQuestion({
      category: "",
      content: "",
    }); // Clear form after submission
  };


  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (selectedQuestionId) {
      postComment(selectedQuestionId, { content: commentContent } ); 
      setCommentContent("");
    }
  };

  const toggleCommentsPopup = () => {
    setShowCommentsPopup(prev => !prev);  
  };

 
  return (
    <div>
      <SideBar />
      <div className="xl:flex mt-2 xl:ml-[263px] ml-[60px]">
        <div className="xl:w-[75%]">
          <div className="ml-3 mr-3">
            <div className="flex items-center justify-center ml-12">
              <div className="relative flex items-center">
                <i className="fa-solid fa-magnifying-glass absolute ml-5 pointer-events-none text-xl"></i>
                <input
                  className="bg-search border-none pr-3 pl-14 xl:w-[700px] h-[50px] rounded-[40px] mr-20 placeholder-black text-lg"
                  name="search"
                  placeholder="Search Questions"
                  autoComplete="off"
                  aria-label="Search Study Rooms"
                />
              </div>
            </div>
          </div>
          <div className="ml-20 mr-20 mt-5">
            <div className="xl:flex rounded-[20px] w-[100%] h-[350px]">
              <div className="xl:flex justify-between items-center bg-questions xl:w-[30%] mt-10 xl:mb-10 xl:ml-5 xl:rounded-l-[30px] rounded-t-[30px]">
                <div></div>
                <div>
                  <div className="flex xl:justify-end justify-center mb-[-15px]">
                    <p className="text-5xl font-semibold mr-2">Throw</p>
                  </div>
                  <div className="flex xl:justify-end justify-center">
                    <p className="text-5xl font-semibold mr-2 text-white">Your</p>
                  </div>
                  <div className="flex xl:justify-end justify-center mt-[-15px]">
                    <p className="text-5xl font-semibold mr-2">Questions</p>
                  </div>
                </div>
              </div>
              <div className="shadow-lg p-5 rounded-3xl">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center h-[25%]">
                    <select
                      className="border questions rounded-2xl p-2"
                      value={newQuestion.category}
                      onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })}
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center h-[50%] mt-2">
                    <textarea
                      value={newQuestion.content}
                      onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                      className="border questions rounded-[20px] h-[140px] w-[550px] p-5"
                      placeholder="Type your question here"
                    />
                  </div>
                  <div className="flex justify-between items-center h-[25%] p-5">
                    <div className="flex">
                      <div className="flex items-center">
                        <i className="fa-regular fa-file-image text-xl logo1"></i>
                        <p className="ml-2">Photo</p>
                      </div>
                      <div className="flex items-center ml-10">
                        <i className="fa-regular fa-file-video text-xl logo1"></i>
                        <p className="ml-2">Video</p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-questions pt-2 pb-2 pr-10 pl-10 rounded-3xl font-semibold hover:shadow-lg hover:shadow-gray-400 active:shadow-none">

                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex w-auto justify-between mt-12 overflow-y-auto scrollbar-thin pl-5 pr-5 h-[100px]">
            {categories.map((category, index) => (
              <div key={index}>
                <button
                  className={`flex catergory ${
                    category === "catergory" ? "categoryselect" : ""
                  } w-[115px] h-[40px] rounded-[20px] justify-center items-center text-sm hover:shadow-lg hover:shadow-gray-400 active:shadow-none`}
                >
                  <p>{category}</p>
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center ml-10 mr-10 mb-7">
            <div className="flex items-center">
              <p className="text-lg font-bold text-xl">Your Questions</p>
            </div>
            <div>
              <button className="category pr-4 pl-4 rounded-3xl font-semibold mr-5 hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
                Newest
              </button>
              <button className="category pr-4 pl-4 rounded-3xl font-semibold hover:shadow-lg hover:shadow-gray-400 active:shadow-none">
                Popular
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center ml-2 h-[800px] overflow-y-auto">
            {questions.map(question => (
              <div key={question.id} className="xl:w-[90%] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center mt-4">
                    <div>
                      <div className="ml-4 w-2 h-2 bg-green-700 rounded"></div>
                    </div>
                    <div>
                      <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black">
                        <img src="https://cdn.aglty.io/boys-town/quotes/ryan_20230915120925.jpg" alt="avatar" className="w-full h-full rounded-full" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-2">
                      <p className="text-lg font-semibold">{question.authorFullName}</p>
                      <p className="text-gray-400">{question.category}</p>
                    </div>
                  </div>
                  <div className="flex ml-20 mr-5">
                    <i className="text-gray-400 fa-solid fa-angle-down text-2xl"></i>
                  </div>
                </div>
                <div className="">
                  <div className="border-l border-gray-500 h-auto ml-14 mt-4 p-2 mr-10 mb-3">
                    <div className="pl-2">
                      <p>{question.content}</p>
                    </div>
                    <div className="flex pl-2 mt-5">
                         <div className="flex items-center">
                      <i
                      className="fa-regular fa-message text-gray-400 cursor-pointer"
                      onClick={() => {
                        setShowCommentPopup(true);
                        setSelectedQuestionId(question.id);
                      }}
                    ></i>
                    {/* fetch comments */}
                    <p className="text-gray-400 ml-2">{}</p>
                  </div>
                  <div className="flex items-center ml-6">
                      <i className="fa-regular fa-eye text-gray-400 cursor-pointer"
                        onClick={() => {
                          fetchComments(question.id); 
                          toggleCommentsPopup();       
                        }}/>
                      <p className="text-gray-400 ml-2">{question.views}</p>
                    </div>
                      <div className="flex items-center ml-6">
                        <i className="fa-regular fa-thumbs-up text-gray-400"></i>
                        <p className="text-gray-400 ml-2">{question.likes}</p>
                        </div>
                      <div className="flex items-center ml-6">
                        <i className="fa-regular fa-thumbs-down text-gray-400"></i>
                        <p className="text-gray-400 ml-2">{question.dislikes}</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showCommentPopup && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg p-5 w-[90%] max-w-lg">
                <h2 className="text-lg font-semibold mb-4">Add a Comment</h2>
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    className="w-full h-20 border border-gray-300 rounded-lg p-2"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    placeholder="Write your comment here"
                  ></textarea>
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={() => setShowCommentPopup(false)}
                      className="bg-gray-500 text-white rounded-lg px-4 py-2 mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white rounded-lg px-4 py-2"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {showCommentsPopup && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-5 w-[90%] max-w-lg">
              <h2 className="text-lg font-semibold mb-4">Comments</h2>
              <div>
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment.id} className="mb-4 p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 text-sm">By {comment.author}</p>
                      
                      
                      <div className="flex items-center space-x-6">
                      <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => handleVote(comment.id, 'upvote')}
                      >
                        <i className={`fa-regular fa-thumbs-up ${comment.userVote === 'upvote' ? 'text-blue-500' : ''}`}></i>
                        <p>{comment.upvote}</p>
                      </div>
                  
                      <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => handleVote(comment.id, 'downvote')}
                      >
                        <i className={`fa-regular fa-thumbs-down ${comment.userVote === 'downvote' ? 'text-red-500' : ''}`}></i>
                        <p>{comment.downvote}</p>
                      </div>
                        </div>
                      </div>
                      <p className="mt-2">{comment.content}</p>
                    </div>
                  
                  ))
                ) : (
                  <p>No comments yet</p>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={() => setShowCommentsPopup(false)} // Close the popup
                  className="bg-gray-500 text-white rounded-lg px-4 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}


        </div>
        <div className="h-100 border border-gray-200 hidden xl:block"></div>
        <div className="xl:w-[25%]">
          <div>
            <p className="m-10 mb-4 font-semibold text-2xl">Notifications</p>
            <div className="flex flex-col items-center ml-2">
              {/* Example notifications, adapt as needed */}
              {["Pramukha Thenuwara", "Thushanka Pramuditha", "Dinushanka Shyamal", "Kasun Udara"].map((name, index) => (
                <div key={index} className="flex items-center xl:w-[90%] w-[350px] h-auto bg-gray-100 rounded-[10px] justify-between m-2 p-2">
                  <div className="flex items-center">
                    <div>
                      <div className="ml-4 w-2 h-2 bg-gray-400 rounded"></div>
                    </div>
                    <div>
                      <div className="ml-3 w-[52px] h-[52px] border-2 border-yellow-400 rounded-full bg-black">
                        <img src={user} alt="avatar" className="w-full h-full rounded-full" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-2">
                      <p className="text-lg font-semibold">{name}</p>
                      <p className="opacity-40">added a comment to your post.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forums;
