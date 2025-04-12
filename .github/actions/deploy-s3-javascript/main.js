const core = require("@actions/core");
//const github = require("@actions/github"); for github API
const exec = require("@actions/exec");

function run() {
  // 1. Get input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  //2. upload files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice("This is JS log");
}

run();
