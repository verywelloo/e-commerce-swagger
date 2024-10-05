const CustomError = require("../errors");

const checkPermission = (requestUser, resourceUserId) => {
  // console.log(requestUser) user that login
  // console.log(resourceUserId)
  // console.log(typeof resourceUserId)
  if (requestUser.role === "admin") return; // if admin, good to go
  if (requestUser.userId === resourceUserId.toString()) return; // if user looking for own info, good to go. resourceUserId.toString() because it is object and cannot match with string form requestUser.userId
  // something else will get an error
  throw new CustomError.UnauthorizedError(
    "Not authorized to access this route"
  );
};

module.exports = checkPermission;
