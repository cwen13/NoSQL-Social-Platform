const {Thought} = require("./../../models");

// Routes need to include create, update, and delete api calls

module.exports = {
  // DONE route to return all thoughts
  getThoughts(req,res) {
    Thought.find()
    .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err)) 
  },
  
  // DONE route to get single thought
  getThought(req,res) {
    Thought.findOne({_id: req.params.id})
      .select("-__v")
      .then((thought) =>
	!thought
	  ? res.status(404).json({message: "There is no thought with that ID"})
	  : res.json(thought)
      )
      .catch((err) => res.json(err));
  },

  // DONE route to post reaction to a thought
  addReaction(req,res) {
    Thought.findOneAndUpdate(
      {_id: req.params.id},
      {$push:
       {
	 reactions: req.body
       }
      },
      {
	runValidators: true,
	new: true
      }
    )
      .then((thought) =>
	!thought
	  ? res.status(404).json({message: "There is no thought with that ID"})
	  : res.json(thought)
      )
      .catch((err) => res.json(err));
  },


  //route to get the thoght and its reactions
  getReactions(req,res) {
    Thought.findOne ({_id: req.params.id})
      .select("__v")
      .populate("reactions")
      .then((reactions) =>
	!reactions
	  ? res.status(404).json({message:"There are no reactions to this thought"})
	  : res.json(reactions)
      )
  },
  
	
  
  //  // TODO route to delete reaciton to a  thought
//  deleteReaction(req,res) {
//    Thought.FindById({_id: req.params.id})
//
//  }

};
