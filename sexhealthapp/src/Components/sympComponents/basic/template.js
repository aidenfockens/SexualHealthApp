/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */
export default function (context) {
  return new Promise((resolve) => {
    resolve(`
      <form style="margin-top: 8vh;">
        <div class="col-sm-10">      
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sex-radio-inline-1" 
              name="sex-radio-inline" class="input-sex custom-control-input" value="male" checked>
            <label class="custom-control-label" for="sex-radio-inline-1">
              <i class="fa fa-fw fa-male"></i> male
            </label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="sex-radio-inline-2" 
              name="sex-radio-inline" class="input-sex custom-control-input" value="female">
            <label class="custom-control-label" for="sex-radio-inline-2">
              <i class="fa fa-fw fa-female"></i> female
            </label>
          </div>
        </div>
        <div class="form-group row">
          <label for="input-age" class="col-sm-2 col-form-label">Age</label>
          <div class="col-sm-2">
            <input type="number" class="form-control" id="input-age" value="30">
          </div>
        </div>
        <p id="age-validation" class="col-sm-6 alert alert-danger" hidden="true">
          Please enter an age in the range 0-130.
        </p>
      </form>
    `);
  });
}