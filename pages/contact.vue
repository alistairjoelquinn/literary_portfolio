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
                                placeholder="Full Name"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input
                                class="input"
                                type="email"
                                placeholder="Email Address"
                                value=""
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea
                                class="textarea"
                                placeholder="Please enter your message here..."
                            ></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox make-black">
                                <input type="checkbox" />
                                I agree to the
                                <a href="#" class="make-blue"
                                    >terms and conditions</a
                                >
                            </label>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-primary">Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-primary is-light">
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
    color: $sixth;
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
.make-blue {
    color: $sixth;
}
.make-black {
    color: black;
}
h1 {
    font-size: 40px;
}
</style>
