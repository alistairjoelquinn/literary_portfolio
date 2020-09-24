<template>
    <div class="border-box">
        <div class="container">
            <div class="inner-border">
                <div class="form-cont">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input
                                class="input"
                                type="text"
                                placeholder="Text input"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input
                                class="input is-danger"
                                type="email"
                                placeholder="Email input"
                                value="hello@"
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <p class="help is-danger">This email is invalid</p>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea
                                class="textarea"
                                placeholder="Textarea"
                            ></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox" />
                                I agree to the
                                <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-primary">Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.border-box {
    border: 1px solid black;
    border-left: none;
    width: 100%;
    z-index: 3;
    background-color: antiquewhite;
}
.container {
    border: 15px solid $sixth;
    min-height: 100%;
    z-index: 3;
}
.inner-border {
    height: calc(100vh - 30px);
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.form-cont {
    width: 80%;
}
h1 {
    font-size: 40px;
}
</style>
