import adminService from "../services/admin.service.js"

export const getUser = async(req,res) =>{
  const result = await adminService.getUser()

  res.json({
    result
  })
}

export const getOrder = async(req,res) =>{
  const result = await adminService.getOrder()

  res.json({
    result
  })
}

export const getKois = async(req,res) =>{
  const result = await adminService.getKoi()

  res.json({
    result
  })
}