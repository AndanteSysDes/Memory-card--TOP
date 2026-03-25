export const gameResultMessage = (score : number, highScore : number):string => {
    if (score > highScore) {
        return `Great! You've set a new high score. Your score : ${score}`;
    } else {
        return `Finish! Your score : ${score}`;
    }
};