const mongoose = require("mongoose");

const ResumeShema = new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      thumbnailLink: {
        type: String,
      },
      template: {
        theme: String,
        colorPalette: [String]
      },
      profileInfo: {
        profilePreviewUrl: String,
        fullName: String,
        designation: String,
        summary: String,
      },
      ContactInfo: {
        email: String,
        phone: String,
        location: String,
        linkedin: String,
        github: String,
        website: String, 
      },
      workExperience: [
        {
           company: String,
           role: String,
           startData: String,
           endDate: String,
           description: String,  
        },
      ],
      education: [
        {
            degree: String,
            institution: String,
            startData: String,
            endDate: String,
        },
      ],
      skills: [
        {
           name: String,
           progress: Number,  
        },
      ],
      projects: [
        {
            title: String,
            description: String,
            github: String,
            liveDemo: String,
        },
      ],
      certifications: [
        {
           title: String,
           issuer: String,
           year: String,  
        },
      ],
      language: [
        {
            name: String,
            progress: Number,
        },
      ],
      interests: [String],   
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "createdAt" },
    }
);

module.exports = mongoose.model("Resume", ResumeSchema);