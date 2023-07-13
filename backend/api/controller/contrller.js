const User=require('../model/schema')

exports.signup = async (req, res) => {
  const { name, email } = req.body;
  // const image = req.file.filename;
    //hashing password
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(password, salt);
    
      
      if (!name || !email) {
        return res.status(404).json({ message: "fill the input field" })
      }
    //   check user exsist or not in database
    //   const UserExist = await UserSchema.findOne({ email })
    //   if (UserExist) {
    //     console.log("user exist condition is running");
  
    //     return res.status(400).json({ message: "this user already exsist try with unique email !!!" })
       
  
    //   }
    console.log('run lgin datta');
    
      let userr = new User({ name,email})
    
  
      userr.save().then((respnse)=>{
        res.status(200).json({ message: "user saved successfully",respnse})
      }).catch((error)=>{

        console.log(error);

      })


  
    //   res.status(200).json({ message: "user saved successfully",result,token})
     
  
  
    }
   
    exports.getdata= async (req,res)=>{

    
     try {
      const result = await User.find();

      res.status(200).json({ message: "Success", result });
     
      console.log(result,'result');
    } catch (error) {
      res.status(400).json({message:"success",error})
      console.error('An error occurred:', error);
    }
  }

  exports.delete = async (req, res) => {
    const userId = req.params.id;
    console.log('userId', userId);
    try {
   let deleteuser= await User.findByIdAndDelete(userId); // Use await to wait for the deletion to complete
  
      res.status(200).json({ message: 'deleted Successfully',deleteuser});
    
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Error', error });
    }
  };
//update api
  exports.update=async (req,res)=>{
    console.log("udateeeeeeeeeeeeeeeeee");
    let id=req.params.id;
      const { name, email } = req.body;

    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email },
        { new: true }
      );
      console.log(updatedUser);
  
      if (!updatedUser) {
        return res.json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
    


  }
    
  exports.one_data= async (req,res)=>{
    let id=req.params.id;
    console.log(id);
      User.findById(id).then((response)=>{  
        res.status(200).json({response})}).catch(()=>{

        res.status(400).json({message:"user not find"})
     })





      
     }
  