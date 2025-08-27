import { useState } from "react"
function DisplayMessage(props: any) {
    let visibility
    if (props.value < 0) {
        visibility = "hidden"
    } else {
        visibility = "show"
    }

    if (props.value == 0) {
        return (
            <div>
                <span className={`${visibility} font-semibold`}> Click the emoji to start fucking</span>
            </div>
        )
    } else {
        return (
            <div>
                <span className={`${visibility} font-semibold`}> Fuck count: {props.value}</span>
            </div>
        )
    }
}

function Counter() {
    let [state, setState] = useState({ value: -1, message: "", emoji: "", animationVisibility: "hidden" })
    console.log(state.value)
    return (
        <div className="flex flex-row justify-center items-center h-screen">
            <div className="flex flex-col items-center gap-3 text-5xl" >
                <DisplayMessage value={state.value} />
                <button
                    className="peer text-5xl bg-green-500 text-gray-100 font-semibold w-fit h-fit p-3 rounded-full selection:bg-transparent"
                    onMouseDown={() => setState((prev) => {
                        return ({
                            ...prev, emoji: "😵"
                        })
                    })}
                    onMouseUp={() => {
                        setState((prev) => {
                            return { ...prev, emoji: "😳", value: prev.value + 1, animationVisibility: "show" }
                        })
                    }}
                >

                    {state.value > -1 ? state.emoji : "Play now"}

                </button>
                <div className={`peer-active:gap-0 gap-9 flex flex-row ${state.animationVisibility}`}>
                    <div className=" relative left-4 top-3">
                        👉
                    </div>
                    <div className="relative right-4" >
                        👌
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Counter